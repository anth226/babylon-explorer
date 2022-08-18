import axios from "axios";

/*
 * example pormetheus data row:
 * tendermint_consensus_total_txs{chain_id="chain-test"} 0
 *
 * split each row and treat the first part as key and second part as value
 * and store in a dictionary
 */
function handlePrometheusData(data: string) {
    let arr = data.split("\n").filter(function (e) {
        return e.charAt(0) != "#";
    });
    var dict = {};
    for (let e of arr) {
        let str = e.split(" ");
        dict[str[0]] = str[1];
    }
    return dict;
}

export default {
    namespaced: true,
    state() {
        return {
            metrics: {},
        };
    },
    getters: {
        metrics: (state) => state.metrics,
    },
    mutations: {
        SET_METRICS(state, metrics) {
            state.metrics = metrics;
        },
    },
    actions: {
        async init({ dispatch, rootGetters }) {
            dispatch("getMetrics");

            if (rootGetters["common/env/client"]) {
                rootGetters["common/env/client"].on("newblock", () => {
                    dispatch("getMetrics");
                });
            }
        },

        async getMetrics({ commit, rootGetters }) {
            try {
                const metrics = await axios.get(
                    rootGetters["common/env/apiPrometheus"] + "/metrics"
                );
                let prometheusData = handlePrometheusData(metrics.data);
                commit("SET_METRICS", prometheusData);
            } catch {
                throw new Error("Prometheus: Can not get Prometheus metrics");
            }
        },
    },
};
