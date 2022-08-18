import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            num_validators: 0
        };
    },
	getters: {
		numValidators: (state) => {
			return state.num_validators
		}
	},
	mutations: {
		SET_NUM_VALIDATORS(state, num) {
			state.num_validators = num
		}
	},
	actions: {
		async getNumValidators({commit, rootGetters}){
			try{
				const num = await axios.get(
                    rootGetters["common/env/apiCosmos"] + "/validatorsets/latest"
                );
				commit("SET_NUM_VALIDATORS", num.data.result.total)
			} catch {
				throw new Error(
                    "Validators: Can not get the latest set of validators"
                );
			}
		}
	}
}