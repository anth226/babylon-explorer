import axios from "axios";
import type { V1Beta1PageRequest } from "../types/pagination";

let btclightclientQueryPrefix = "/babylon/btclightclient/v1/";

export async function getMainChain(
    apiCosmos,
    query?: {
        status?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }
) {
    try {
        let mainChain = await axios.get(
            apiCosmos + btclightclientQueryPrefix + "mainchain",
            { params: query }
        );
        return mainChain.data;
    } catch {
        throw new Error("BtcLightClient: Unable to retrieve mainChain");
    }
}
