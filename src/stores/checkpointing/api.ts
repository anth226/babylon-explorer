import axios from "axios";
// import type { V1Beta1PageRequest } from "../types/pagination";

let checkpointingQueryPrefix = "/babylon/checkpointing/v1/";

/*
Status:

  // ACCUMULATING defines a checkpoint that is awaiting for BLS signatures.
  CKPT_STATUS_ACCUMULATING = 0 [(gogoproto.enumvalue_customname) = "Accumulating"];
  // SEALED defines a checkpoint that has accumulated sufficient BLS signatures.
  CKPT_STATUS_SEALED = 1 [(gogoproto.enumvalue_customname) = "Sealed"];
  // SUBMITTED defines a checkpoint that is included on BTC.
  CKPT_STATUS_SUBMITTED = 2 [(gogoproto.enumvalue_customname) = "Submitted"];
  // CONFIRMED defines a checkpoint that is k-deep on BTC.
  CKPT_STATUS_CONFIRMED = 3 [(gogoproto.enumvalue_customname) = "Confirmed"];
  // FINALIZED defines a checkpoint that is w-deep on BTC.
  CKPT_STATUS_FINALIZED = 4 [(gogoproto.enumvalue_customname) = "Finalized"];

/*

/*
Sample response:
{
  "rawCheckpoint": {
    "ckpt": {
      "epochNum": "1",
      "lastCommitHash": "yfuNfUstx/fuoiXoJreHS7CglfqFYJt+K3Jss8Ozags="
    }
  }
}
*/

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
