import axios from "axios"

export async function getCurrentEpoch(apiCosmos) {
    try {
        let currentEpoch = await axios.get(
            apiCosmos + "/babylon/epoching/v1/current_epoch"
        )
        return currentEpoch.data
    } catch {
        throw new Error(
            "Epoching: Unable to retrieve the latest epoch information"
        )
    }
}

export async function getParams(apiCosmos) {
    try {
        let params = await axios.get(apiCosmos + "/babylon/epoching/v1/params")
        console.log(params.data)
        return params.data
    } catch {
        throw new Error("Epoching: Unable to retrieve the latest epoch params")
    }
}
