import axios from "axios";

export async function getValidatorSet(apiCosmos) {
    //TODO: add pagination if number of validators too large (>100)
    try {
        let validatorSet = await axios.get(
            apiCosmos + "/cosmos/staking/v1beta1/validators"
        );
        return validatorSet.data;
    } catch {
        throw new Error(
            "Validators: Unable to retrieve the latest validator set information"
        );
    }
}
