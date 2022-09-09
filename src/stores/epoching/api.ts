<<<<<<< HEAD
import axios from "axios"
=======
import axios from "axios";

let epochingQueryPrefix = "/babylon/epoching/v1/";
>>>>>>> main

export async function getCurrentEpoch(apiCosmos) {
    try {
        let currentEpoch = await axios.get(
<<<<<<< HEAD
            apiCosmos + "/babylon/epoching/v1/current_epoch"
        )
        return currentEpoch.data
=======
            apiCosmos + epochingQueryPrefix + "current_epoch"
        );
        return currentEpoch.data;
>>>>>>> main
    } catch {
        throw new Error(
            "Epoching: Unable to retrieve the latest epoch information"
        )
    }
}

export async function getParams(apiCosmos) {
    try {
<<<<<<< HEAD
        let params = await axios.get(apiCosmos + "/babylon/epoching/v1/params")
        console.log(params.data)
        return params.data
=======
        let params = await axios.get(
            apiCosmos + epochingQueryPrefix + "params"
        );
        return params.data;
>>>>>>> main
    } catch {
        throw new Error("Epoching: Unable to retrieve the latest epoch params")
    }
}

export async function getValidatorLifeCycle(apiCosmos, validatorAddr) {
    try {
        let lifecycle = await axios.get(
            apiCosmos +
                epochingQueryPrefix +
                "validator_lifecycle/" +
                validatorAddr
        );
        return lifecycle.data;
    } catch {
        throw new Error(
            "Epoching: Unable to retrieve validator lifecycle for " +
                validatorAddr
        );
    }
}

export async function getEpochMsgs(
    apiCosmos,
    epochNum,
    query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }
) {
    try {
        let epochMsgs = await axios.get(
            apiCosmos + epochingQueryPrefix + "epoch_msgs/" + epochNum,
            { params: query }
        );
        return epochMsgs.data;
    } catch {
        throw new Error(
            "Checkpointing: Unable to retrieve the checkpointing list information"
        );
    }
}
