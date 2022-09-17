import { getValidatorSet } from "./api";
import paramConfig from "../../../config/paramconfig.json";

let validatorSetLimit = paramConfig.validatorSetLimit;

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
        getNumUnbonded: (state) => {
            return state.num_unbonded_24h;
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
                const validatorSet = await getValidatorSet(
                    rootGetters["common/env/apiCosmos"]
                );
                // TODO: add pagination
                let total = validatorSet.validators.length; //change to the pagination total
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
                commit("SET_NUM_ACTIVE", Math.min(validatorSetLimit, bonded));
                commit(
                    "SET_NUM_STANDBY",
                    bonded - Math.min(validatorSetLimit, bonded)
                );
            } catch {
                throw new Error(
                    "Validators: Can not get the latest set of validators"
                );
            }
        },
    },
};
