import axios from "axios";

export async function getValidatorSet(
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
        let validatorSet = await axios.get(
            apiCosmos + "/cosmos/staking/v1beta1/validators",
            { params: query }
        );
        return validatorSet.data;
    } catch {
        throw new Error(
            "Validators: Unable to retrieve the latest validator set information"
        );
    }
}
