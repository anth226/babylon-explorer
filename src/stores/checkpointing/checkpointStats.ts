import { getRawCheckpoint } from "./api";
export default {
    namespaced: true,
    actions: {
        async getRawCheckpoint({ rootGetters }, epoch_num) {
            return new Promise(async (resolve, reject) => {
                try {
                    let rawCheckpoint = await getRawCheckpoint(
                        rootGetters["common/env/apiCosmos"],
                        epoch_num
                    );
                    resolve(rawCheckpoint);
                } catch {
                    reject(
                        new Error(
                            "CheckpointStats: Unable to retrieve checkpoint information. epoch_num: " +
                                epoch_num
                        )
                    );
                }
            });
        },
    },
};
