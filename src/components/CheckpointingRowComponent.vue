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
        this.getStatus();
    },
};
</script>

<template>
    <tr>
        <td>
            <RouterLink :to="{ path: '/epochs/' + epochNum }">
                {{ epochNum }}
            </RouterLink>
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
