import { getValidatorSet } from "./api";

export default {
    namespaced: true,
    state() {
        return {
            num_validators: 0,
            num_active: 0,
            num_standby: 0,
            num_unbonding: 0,
            num_penalized: 0,
            validator_set: [],
        };
    },
    getters: {
        getNumValidators: (state) => {
            return state.num_validators;
        },
        getNumActive: (state) => {
            return state.num_active;
        },
        getNumStandby: (state) => {
            return state.num_standby;
        },
        getNumUnbonding: (state) => {
            return state.num_unbonding;
        },
        getNumPenalized: (state) => {
            return state.num_penalized;
        },
        getValidatorSet: (state) => {
            return state.validator_set;
        },
        getAllValidatorStatistic: (state) => {
            return state;
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
        SET_NUM_PENALIZED(state, num) {
            state.num_penalized = num;
        },
        SET_VALIDATOR_SET(state, set) {
            state.validator_set = set;
        },
    },
    actions: {
        async init({ dispatch, rootGetters }) {
            dispatch("getValidatorSetStatus");
            if (rootGetters["common/env/client"]) {
                rootGetters["common/env/client"].on(
                    "newValidatorSetUpdates",
                    () => {
                        dispatch("getValidatorSetStatus");
                    }
                );
            }
        },
        async getValidatorSetStatus({ commit, rootGetters }) {
            try {
                var paginationKey = ""; //initialize to empty string. updates as the while loop runs
                let validatorSet: any[] = [];
                while (true) {
                    const validatorSubSet = await getValidatorSet(
                        rootGetters["common/env/apiCosmos"],
                        {
                            "pagination.key": paginationKey,
                        }
                    );
                    validatorSet = validatorSet.concat(
                        validatorSubSet.validators
                    );

                    if (validatorSubSet.pagination.next_key == null) {
                        // break condition
                        break;
                    } else {
                        paginationKey = validatorSubSet.pagination.next_key; // update paginationKey for next iteration
                    }
                }
                commit("SET_NUM_VALIDATORS", validatorSet.length);
                commit("SET_VALIDATOR_SET", validatorSet);
                let penalized = 0;
                let unbonding = 0;
                let standby = 0;
                let bonded = 0;
                for (let validator of validatorSet) {
                    if (validator.jailed) {
                        penalized += 1;
                    }
                    if (validator.status == "BOND_STATUS_UNBONDING") {
                        unbonding += 1;
                    }
                    if (validator.status == "BOND_STATUS_BONDED") {
                        bonded += 1;
                    }
                    if (validator.status == "BOND_STATUS_UNBONDED") {
                        standby += 1;
                    }
                }
                commit("SET_NUM_PENALIZED", penalized);
                commit("SET_NUM_UNBONDING", unbonding);
                commit("SET_NUM_ACTIVE", bonded);
                commit("SET_NUM_STANDBY", standby);
            } catch {
                throw new Error(
                    "Validators: Can not get the latest set of validators"
                );
            }
        },
    },
};
