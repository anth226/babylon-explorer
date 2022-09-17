<script>
export default {
    props: {
        epochNum: Number,
        staticBeginBlock: Number,
        staticEndBlock: Number,
    },

    data: function () {
        return {
            checkpointStatus: "",
            confirmationStatus: "",
        };
    },

    computed: {
        chainHeight() {
            return parseInt(this.$store.getters["common/blocks/getHeight"]);
        },

        showLink() {
            return this.chainHeight > this.staticEndBlock;
        },
    },

    methods: {
        getStatus() {
            // if epoch not finished yet
            if (this.chainHeight < this.staticEndBlock) {
                this.checkpointStatus = "Unavailable (Epoch Not Finished Yet)";
                this.confirmationStatus = "Unavailable";
            } else {
                this.$store
                    .dispatch(
                        "checkpointing/checkpointStats/getRawCheckpoint",
                        this.epochNum
                    )
                    .then(
                        (response) => {
                            let status = response.raw_checkpoint.status;
                            if (status == "CKPT_STATUS_ACCUMULATING") {
                                this.checkpointStatus = "Accumulating";
                                this.confirmationStatus = "Unavailable";
                            } else if ((status = "CKPT_STATUS_SEALED")) {
                                this.checkpointStatus = "Ready";
                                this.confirmationStatus = "Sealed";
                            } else if ((status = "CKPT_STATUS_SUBMITTED")) {
                                this.checkpointStatus = "Submitted";
                                this.confirmationStatus = "Unconfirmed";
                            } else if ((status = "CKPT_STATUS_CONFIRMED")) {
                                this.checkpointStatus = "Submitted";
                                this.confirmationStatus = "Confirmed";
                            } else if ((status = "CKPT_STATUS_FINALIZED")) {
                                this.checkpointStatus = "Submitted";
                                this.confirmationStatus = "Finalized";
                            }
                        },
                        (error) => {
                            this.checkpointStatus = "Unavailable";
                            this.confirmationStatus = "Unavailable";
                        }
                    );
            }
        },
    },

    mounted: function () {
        if (this.chainHeight == 0) {
            this.unwatchchainHeight = this.$watch("chainHeight", (newVal) => {
                if (newVal) {
                    this.getStatus();
                    this.unwatchchainHeight();
                }
            });
        } else {
            this.getStatus();
        }

        this.$watch("staticEndBlock", (newVal) => {
            if (newVal) {
                this.getStatus();
                this.unwatchchainHeight();
            }
        });
    },
};
</script>

<template>
    <tr>
        <td v-if="showLink">
            <RouterLink :to="{ path: '/epochs/' + epochNum }">
                {{ epochNum }}
            </RouterLink>
        </td>
        <td v-else>
            {{ epochNum }}
        </td>
        <td>block {{ staticBeginBlock }} - block {{ staticEndBlock }}</td>
        <td>{{ checkpointStatus }}</td>
        <td>{{ confirmationStatus }}</td>
    </tr>
</template>

<style scoped>
td {
    padding: 12px 15px;
}
</style>
