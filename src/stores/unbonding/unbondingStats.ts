import {
    getCurrentEpoch,
    getLatestEpochMsgs,
    getDelegatorLifecycle,
} from "../epoching/api";

import { getBtcCheckpointHeight } from "../btccheckpoint/api";

//calculate the difference in days of date1 - date2
function dayDifference(date1: Date, date2: Date) {
    let dividingConstant = 1000 * 60 * 60 * 24.0;
    return date1 > date2
        ? (date1.getTime() - date2.getTime()) / dividingConstant
        : (date2.getTime() - date1.getTime()) / dividingConstant;
}

interface FullEvent {
    delegator: String;
    unbonded?: any;
    unbonding: any;
}

interface FullEventDisplay {
    delegator: String;
    epoch: Number;
    btcHeight: any;
    approved: Boolean;
}

export default {
    namespaced: true,
    state() {
        return {
            unbondingDelegatorSet: [],
            ongoingUndelegatingRequests: 0,
            completedUndelegatingRequests: 0,
            averageUndelegatingTime: 0,
            topThreeRequests: [],
            epochHasNewRequest: false,
        };
    },
    getters: {
        getUnbondingValidatorSet: (state) => {
            return state.unbondingDelegatorSet;
        },
        getAllUnbondingStats: (state) => {
            return state;
        },
    },
    mutations: {
        SET_UNBONDING_DELEGATOR_SET(state, set) {
            state.unbondingDelegatorSet = set;
        },
        SET_ONGOING_UNDELEGATING_REQUESTS(state, requests) {
            state.ongoingUndelegatingRequests = requests;
        },
        SET_COMPLETED_UNDELEGATING_REQUESTS(state, requests) {
            state.completedUndelegatingRequests = requests;
        },
        SET_AVERAGE_UNDELEGATING_TIME(state, time) {
            state.averageUndelegatingTime = time;
        },
        SET_TOP_THREE_REQUESTS(state, requests) {
            state.topThreeRequests = requests;
        },
        UPDATE_ON_NEW_UNBONDING_REQUEST(state, address) {
            state.epochHasNewRequest = true;
            if (
                // if this is an old delegator, move it to the front by first removing it from its original place
                state.unbondingDelegatorSet.includes(address)
            ) {
                state.unbondingDelegatorSet.splice(
                    state.unbondingDelegatorSet.indexOf(address),
                    1
                );
            }
            // add address to the front of the array
            state.unbondingDelegatorSet.splice(0, 0, address);
        },
        RESET_EPOCH_HAS_NEW_REQUEST(state) {
            state.epochHasNewRequest = false;
        },
    },
    actions: {
        async init({ dispatch, commit, state, rootGetters }) {
            await dispatch("getAllUnbondingValidators");
            dispatch("getAllUnbondingStats", state.unbondingDelegatorSet);
            dispatch("getTopThreeRequests", state.unbondingDelegatorSet);
            if (rootGetters["common/env/client"]) {
                // On newUndelegating event, we update the unbondingDelegatorSet and update the overall stats when the epoch finish.
                // We do this because these undelegating requests will be saved only on the last block of an epoch

                // TODO: add event handling for EventTypeCompleteUnbonding

                rootGetters["common/env/client"].on(
                    // on new undelegating
                    "newUndelegate",
                    (undelegater) => {
                        let delegatorAddress = JSON.parse(
                            undelegater.delegator_address[0]
                        );
                        // Add new delegator to epoch undelegator array if not in the total set
                        commit(
                            "UPDATE_ON_NEW_UNBONDING_REQUEST",
                            delegatorAddress
                        );
                    }
                );

                rootGetters["common/env/client"].on("newEpoch", () => {
                    if (state.epochHasNewRequest) {
                        // if there's new undelegating request during new epoch
                        commit("RESET_EPOCH_HAS_NEW_REQUEST");
                        // get new stats
                        dispatch(
                            "getTopThreeRequests",
                            state.unbondingDelegatorSet
                        );
                        dispatch(
                            "getAllUnbondingStats",
                            state.unbondingDelegatorSet
                        );
                    }
                });
            }
        },

        async getTopThreeRequests({ commit, rootGetters }, delegators) {
            let allRequests: FullEvent[] = [];
            let topThreeDelegators = delegators.slice(
                0,
                Math.min(3, delegators.length)
            );
            for (let delegator of topThreeDelegators) {
                let lifecycle = await getDelegatorLifecycle(
                    rootGetters["common/env/apiCosmos"],
                    delegator
                );
                let events = lifecycle.del_life.del_life;

                // get unbonding and unbonded events, and go through them in pairs until unbonded events runs out
                let unbonding = events.filter(
                    // filter for UNBONDING events
                    (event) => event.state == "UNBONDING"
                );
                let unbonded = events.filter(
                    // filter for UNBONDED events
                    (event) => event.state == "UNBONDED"
                );
                for (let i = unbonding.length - 1; i >= 0; i--) {
                    // loop from back
                    if (i >= unbonded.length) {
                        // if doesn't have unbonding event
                        allRequests.push({
                            delegator: delegator,
                            unbonding: unbonding[i],
                        });
                    } else {
                        allRequests.push({
                            delegator: delegator,
                            unbonded: unbonded[i],
                            unbonding: unbonding[i],
                        });
                    }
                }
            }
            let sortedRequests = allRequests.sort((a, b) => {
                let timeA = new Date(a.unbonding.block_time);
                let timeB = new Date(b.unbonding.block_time);
                return timeB.getTime() - timeA.getTime();
            });

            let topThreeRequests = sortedRequests.slice(
                0,
                Math.min(3, sortedRequests.length)
            );

            let epoch_interval = parseInt(
                rootGetters["epoching/stats/getEpochInterval"]
            );

            let eventDisplay: FullEventDisplay[] = [];

            for (let request of topThreeRequests) {
                let requestEpoch = Math.ceil(
                    parseInt(request.unbonding.block_height) / epoch_interval
                );
                let btcBlock = "-"; // default set to "-"
                try {
                    btcBlock = await getBtcCheckpointHeight(
                        rootGetters["common/env/apiCosmos"],
                        requestEpoch
                    );
                } catch {
                    /* default already set*/
                }
                let approved = request.hasOwnProperty("unbonded");
                eventDisplay.push({
                    delegator: request.delegator,
                    epoch: requestEpoch,
                    btcHeight: btcBlock,
                    approved: approved,
                });
            }
            commit("SET_TOP_THREE_REQUESTS", eventDisplay);
        },

        // TODO: add testing for lifecycle with unbonding events
        async getAllUnbondingStats({ commit, rootGetters }, delegators) {
            let currentTime = new Date();
            var totalOngoing = 0;
            var totalUnbondedLast24H = 0;
            var totalTime = 0;

            // Go through all delegators, request their lifecycle
            for (let delegator of delegators) {
                let lifecycle = await getDelegatorLifecycle(
                    rootGetters["common/env/apiCosmos"],
                    delegator
                );
                let events = lifecycle.del_life.del_life;
                // console.log(lifecycle);

                // get unbonding and unbonded events, and go through them in pairs until unbonded events runs out
                let unbonding = events.filter(
                    // filter for UNBONDING events
                    (event) => event.state == "UNBONDING"
                );
                let unbonded = events.filter(
                    // filter for UNBONDED events
                    (event) => event.state == "UNBONDED"
                );
                totalOngoing += unbonding.length - unbonded.length;
                for (let i = 0; i < unbonded.length; i++) {
                    let timeDiff = dayDifference(
                        currentTime,
                        new Date(unbonding[i].block_time)
                    );
                    if (timeDiff > 1) {
                        // continue if more than a day old
                        continue;
                    }
                    totalUnbondedLast24H += 1;
                    totalTime += timeDiff;
                }
                commit("SET_ONGOING_UNDELEGATING_REQUESTS", totalOngoing);
                commit(
                    "SET_COMPLETED_UNDELEGATING_REQUESTS",
                    totalUnbondedLast24H
                );
                if (totalUnbondedLast24H == 0) {
                    commit("SET_AVERAGE_UNDELEGATING_TIME", "..."); // no data; avoid division by 0
                } else {
                    commit(
                        "SET_AVERAGE_UNDELEGATING_TIME",
                        totalTime / totalUnbondedLast24H / 24 / 60 / 60 //in seconds
                    );
                }
            }
        },

        async getAllUnbondingValidators({ dispatch, commit, rootGetters }) {
            let allUnbondingDelegators: any[] = [];

            let currentTime = new Date();

            // most updated epoch information
            let currentEpochData = await getCurrentEpoch(
                rootGetters["common/env/apiCosmos"]
            );
            let currentEpoch = currentEpochData.current_epoch;
            let epochBoundary = currentEpochData.epoch_boundary;
            let epochLength = epochBoundary / currentEpoch;

            var paginationKey = ""; //initialize to empty string. updates as the while loop runs

            while (true) {
                let epochList = await getLatestEpochMsgs(
                    rootGetters["common/env/apiCosmos"],
                    {
                        endEpoch: currentEpoch - 1,
                        epochCount: currentEpoch - 1,
                        "pagination.reverse": true,
                        "pagination.limit": "100", // arbitrary number that's small enough to ensure accuracy but large enough to not make the query too slow
                        "pagination.key": paginationKey,
                    }
                );
                let latestEpochMsgs = epochList.latest_epoch_msgs;

                // Filter through all msgs to get all unique unbonding validator address.
                for (let epoch of latestEpochMsgs) {
                    for (let msg of epoch.msgs) {
                        if (msg.hasOwnProperty("msg_undelegate")) {
                            let validatorAddress =
                                msg.msg_undelegate.delegator_address;
                            if (
                                !allUnbondingDelegators.includes(
                                    validatorAddress
                                )
                            ) {
                                allUnbondingDelegators.push(validatorAddress);
                            }
                        }
                    }
                }

                // Check if has reached one day. Stop if true
                let lastEpochInList = // last epoch of the list
                    latestEpochMsgs[latestEpochMsgs.length - 1].epoch_number;
                let lastBlockInListHeight = // height of the last epoch in the previous epoch + 1
                    (lastEpochInList - 1) * epochLength + 1;
                let lastBlockInList = await dispatch(
                    // retrieve the block information of the height
                    "blocks/blockList/getBlockByHeight",
                    lastBlockInListHeight,
                    { root: true }
                );
                let differenceInDay = dayDifference(
                    currentTime,
                    new Date(lastBlockInList.timestamp)
                ); // find the difference in days between current time and the block
                if (differenceInDay > 1) {
                    // break condition
                    break;
                }

                // Check if has more epochs to load. Stop if false
                if (epochList.pagination.next_key == null) {
                    // break condition
                    break;
                } else {
                    paginationKey = epochList.pagination.next_key; // update paginationKey for next iteration
                }
            }
            commit("SET_UNBONDING_DELEGATOR_SET", allUnbondingDelegators);
        },
    },
};
