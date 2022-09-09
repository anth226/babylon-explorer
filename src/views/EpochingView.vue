<script>
export default {
    name: 'EpochingView',
    computed: {
        chainHeight() {
            return this.$store.getters["common/blocks/getHeight"]
        },

        latestEpoch() {
            return this.$store.getters["epoching/stats/getCurrentEpoch"]
        },

        epochBoundary() {
            return this.$store.getters["epoching/stats/getEpochBoundary"]
        },

        epochInterval() {
            return this.$store.getters["epoching/stats/getEpochInterval"]
        },
    },
};
</script>

<template>
    <div class="epochingview-container">
        <div class="top-stats">
            <div class="top-stats-content">
                <div class="top-stats-content-title">Current Epoch</div>
                <div class="top-stats-content-value">{{ latestEpoch }}</div>
            </div>
            <div class="top-stats-content">
                <div class="top-stats-content-title">Epoch Boundary</div>
                <div class="top-stats-content-value">{{ epochBoundary }}</div>
            </div>
            <div class="top-stats-content">
                <div class="top-stats-content-title">Epoching Interval</div>
                <div class="top-stats-content-value">{{ epochInterval }}</div>
            </div>
            <div class="top-stats-content">
                <div class="top-stats-content-title">
                    Blocks Until Next Epoch
                </div>
                <div class="top-stats-content-value">
                    {{ epochBoundary - chainHeight + 1 }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.epochingview-container {
    max-width: 1280px;
}

.epochingview-container > div {
    margin-bottom: 3em;
}
.top-stats {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.top-stats-content {
    display: flex;
    flex-direction: column;
}
.top-stats-content-title {
    color: #666666;
}
.top-stats-content-value {
    color: #2170ff;
}
</style>
