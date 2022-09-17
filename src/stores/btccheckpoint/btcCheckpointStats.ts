import { getBtcCheckpointHeight } from "./api";
export default {
    namespaced: true,
    actions: {
        async getBtcCheckpointHeight({ rootGetters }, epochNum) {
            return new Promise(async (resolve, reject) => {
                try {
                    let checkpoint = await getBtcCheckpointHeight(
                        rootGetters["common/env/apiCosmos"],
                        epochNum
                    );
                    resolve(checkpoint);
                } catch {
                    reject(
                        new Error(
                            "BTCCheckpointStats: Unable to retrieve checkpoint information. epoch_num: " +
                                epochNum
                        )
                    );
                }
            });
        },
    },
};
