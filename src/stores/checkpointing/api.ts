import axios from "axios";
// import type { V1Beta1PageRequest } from "../types/pagination";

let checkpointingQueryPrefix = "/babylon/checkpointing/v1/";

export async function getRawCheckpoint(apiCosmos, epochNum) {
    try {
        let rawCheckpoint = await axios.get(
            apiCosmos + checkpointingQueryPrefix + "raw_checkpoint/" + epochNum
        );
        return rawCheckpoint.data;
    } catch {
        throw new Error(
            "Checkpointing: Unable to retrieve the checkpointing information for epoch " +
                epochNum
        );
    }
}

export async function getRawCheckpointList(
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
        let rawCheckpoints = await axios.get(
            apiCosmos + checkpointingQueryPrefix + "raw_checkpoints",
            { params: query }
        );
        return rawCheckpoints.data;
    } catch {
        throw new Error(
            "Checkpointing: Unable to retrieve the checkpointing list information"
        );
    }
}

// RecentEpochStatusCount queries the number of epochs with each status in recent epochs
// epoch_count is the number of the most recent epochs to include in the aggregation
export async function getRecentEpochStatusCount(apiCosmos, epochCount) {
    try {
        let recentEopchStatusCount = await axios.get(
            apiCosmos + checkpointingQueryPrefix + "epochs:status_count",
            { params: { epoch_count: epochCount } }
        );
        return recentEopchStatusCount.data;
    } catch {
        throw new Error(
            "Checkpointing: Unable to retrieve the epoch status count for the most recent " +
                epochCount +
                " epochs"
        );
    }
}
