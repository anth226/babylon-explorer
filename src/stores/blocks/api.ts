import { sha256 } from "@cosmjs/crypto";
import { fromBase64, toHex } from "@cosmjs/encoding";
import axios from "axios";

function formatTx({
    txHash = "",
    messages = [],
    memo = "",
    signer_infos = [],
    fee = {},
    gas_used = null,
    gas_wanted = null,
    height = null,
    code = 0,
    log = null,
}) {
    return {
        txHash,
        body: {
            messages,
            memo,
        },
        auth_info: {
            signer_infos,
            fee,
        },
        meta: {
            gas_used,
            gas_wanted,
            height,
            code,
            log,
        },
    };
}

/*
 * This is to get more transaction details from transaction hashes we received from blocks
 */
async function getTx(apiCosmos, apiTendermint, encodedTx) {
    const txHash = sha256(fromBase64(encodedTx));
    try {
        const rpcRes = await axios.get(
            apiTendermint + "/tx?hash=0x" + toHex(txHash)
        );
        const apiRes = await axios.get(
            apiCosmos + "/cosmos/tx/v1beta1/txs/" + toHex(txHash)
        );
        return { rpcRes, apiRes, txHash: toHex(txHash).toUpperCase() };
    } catch (e) {
        throw "Error fetching TX data";
    }
}
async function decodeTx(apiCosmos, apiTendermint, encodedTx) {
    let fullTx;
    let retries = 0;
    while (!fullTx && retries < 5) {
        try {
            fullTx = await getTx(apiCosmos, apiTendermint, encodedTx);
        } catch (e) {
            retries++;
            await new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });
        }
    }
    const { data } = fullTx.rpcRes;
    const { height, tx_result } = data.result;
    const { code, log, gas_used, gas_wanted } = tx_result;
    const { body, auth_info } = fullTx.apiRes.data.tx;
    const { messages, memo } = body;

    return formatTx({
        txHash: fullTx.txHash,
        messages,
        memo,
        signer_infos: auth_info.signer_infos,
        fee: auth_info.fee,
        gas_used,
        gas_wanted,
        height,
        code,
        log,
    });
}
async function processBlockData(apiCosmos, apiTendermint, blockData) {
    const txDecoded = blockData.data.result.block.data.txs.map(async (tx) => {
        const dec = await decodeTx(apiCosmos, apiTendermint, tx);
        return dec;
    });
    const txs = await Promise.all(txDecoded);

    const block = {
        height: blockData.data.result.block.header.height,
        timestamp: blockData.data.result.block.header.time,
        hash: blockData.data.result.block_id.hash,
        details: blockData.data.result.block,
        proposer: blockData.data.result.block.header.proposer_address,
        txDecoded: txs,
    };
    return block;
}

export async function getHeight(apiTendermint) {
    try {
        const status = await axios.get(apiTendermint + "/status");
        return status.data.result.sync_info.latest_block_height;
    } catch {
        throw new Error(
            "Blocks: Unable to retrieve chain height from tendermint status"
        );
    }
}

export async function getBlockByHeight(apiCosmos, apiTendermint, block_height) {
    let blockData = await axios.get(
        apiTendermint + "/block?height=" + block_height
    );
    return await processBlockData(apiCosmos, apiTendermint, blockData);
}

export async function getBlockByHash(apiCosmos, apiTendermint, block_hash) {
    let blockData = await axios.get(
        apiTendermint + "/block_by_hash?hash=0x" + block_hash
    );
    return await processBlockData(apiCosmos, apiTendermint, blockData);
}

export async function getBlockHeaders(apiTendermint, minHeight, maxHeight) {
    let blockHeaders = await axios.get(
        apiTendermint +
            "/blockchain?minHeight=" +
            minHeight +
            "&maxHeight=" +
            maxHeight
    );
    return blockHeaders.data;
}
