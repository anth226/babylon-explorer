import { getValidatorSet } from "./api";

export default {
    namespaced: true,
    state() {
        return {
            num_validators: 0,
            num_active: 0,
            num_standby: 0, // not in use, to be implemented
            num_unbonding: 0,
            num_unbonded_24h: 0, // not in use, to be implemented
            num_penalized: 0,
            validator_set: [],
        };
    },
    getters: {
        numValidators: (state) => {
            return state.num_validators;
        },
        numActive: (state) => {
            return state.num_active;
        },
        numStandby: (state) => {
            return state.num_standby;
        },
        numUnbonding: (state) => {
            return state.num_unbonding;
        },
        numUnbonded: (state) => {
            return state.num_unbonded_24h;
        },
        numPenalized: (state) => {
            return state.num_penalized;
        },
        validatorSet: (state) => {
            return state.validator_set;
        },
    },
    mutations: {
        SET_NUM_VALIDATORS(state, num) {
            state.num_validators = num;
        },
        SET_NUM_ACTIVE(state, num) {
            state.num_active = num;
        },
        SET_NUM_STANDBY(state, num) {
            state.num_standby = num;
        },
        SET_NUM_UNBONDING(state, num) {
            state.num_unbonding = num;
        },
        SET_NUM_UNBONDED(state, num) {
            state.num_unbonded_24h = num;
        },
        SET_NUM_PENALIZED(state, num) {
            state.num_penalized = num;
        },
        SET_VALIDATOR_SET(state, set) {
            state.validator_set = set;
        },
    },
    actions: {
        async getValidatorSetStatus({ commit, rootGetters }) {
            try {
                const validatorSet = await getValidatorSet(
                    rootGetters["common/env/apiCosmos"]
                );
                let total = validatorSet.validators.length;
                commit("SET_NUM_VALIDATORS", total);
                commit("SET_VALIDATOR_SET", validatorSet.validators);

                let penalized = 0;
                let unbonding = 0;
                let bonded = 0;
                for (let validator of validatorSet.validators) {
                    if (validator.jailed) {
                        penalized += 1;
                    }
                    if (validator.status == "BOND_STATUS_UNBONDING") {
                        unbonding += 1;
                    }
                    if (validator.status == "BOND_STATUS_BONDED") {
                        bonded += 1;
                    }
                }
                commit("SET_NUM_PENALIZED", penalized);
                commit("SET_NUM_UNBONDING", unbonding);
                commit("SET_NUM_ACTIVE", bonded);
            } catch {
                throw new Error(
                    "Validators: Can not get the latest set of validators"
                );
            }
        },
    },
};
