import axios from "axios";

let btccheckpointQueryPrefix = "/babylon/btccheckpoint/v1/";

// BtcCheckpointHeight returns earliest block height for given rawcheckpoint
export async function getBtcCheckpointHeight(apiCosmos, epochNum) {
    try {
        let btcCheckpointHeight = await axios.get(
            apiCosmos + btccheckpointQueryPrefix + epochNum
        );
        return btcCheckpointHeight.data;
    } catch {
        throw new Error(
            "BtcCheckpoint: Unable to the checkpoint height for epoch" +
                epochNum
        );
    }
}
