<script>
import CheckPointingRowComponent from "../../components/CheckpointingRowComponent.vue";

export default {
    components: {
        CheckPointingRowComponent,
    },
    data: function () {
        return {
            staticLatestEpoch: 0,
            staticEpochBoundary: 0,
            staticEpochInterval: 0,
            pageSize: 10,
            page: 0, // the current page user is on

            searchText: "",
        };
    },

    computed: {
        chainHeight() {
            return parseInt(this.$store.getters["common/blocks/getHeight"]);
        },

        latestEpoch() {
            return parseInt(
                this.$store.getters["epoching/stats/getCurrentEpoch"]
            );
        },

        epochBoundary() {
            return parseInt(
                this.$store.getters["epoching/stats/getEpochBoundary"]
            );
        },

        epochInterval() {
            return parseInt(
                this.$store.getters["epoching/stats/getEpochInterval"]
            );
        },

        pageStart() {
            return this.staticLatestEpoch - this.page * this.pageSize;
        },

        // This number is the last epoch (epoch with the lowest number) on a page calculated
        // by subtracting pageNumber times pageSize from the latest epoch. However, there's a
        // possibility that we get 0 or a negative number (the last page's pageSize is too big),
        // so we have to check for that condition
        pageEnd() {
            return Math.max(
                1,
                this.staticLatestEpoch - (this.page + 1) * this.pageSize + 1
            );
        },

        hasPreviousPage() {
            return this.page != 0;
        },
        hasNextPage() {
            return this.pageEnd > 1;
        },
    },

    methods: {
        range(endAt, startAt = 0) {
            let size = endAt - startAt + 1;
            let returnValue = [...Array(size).keys()].map((i) => i + startAt);
            return returnValue.reverse();
        },
        getNextPage() {
            this.page += 1;
        },
        getPreviousPage() {
            this.page -= 1;
        },

        submit: async function () {
            this.$router.push({ path: "/epochs/" + this.searchText });
            this.searchText = "";
        },

        // beginBlock is the first block (block with the lowest height) of the epoch
        // It is calculated by finding the height of the endBlock of the epoch before the one of interest,
        // and then add 1 to that.
        beginBlock(epochNum) {
            return (
                this.staticEpochBoundary -
                (this.staticLatestEpoch - epochNum + 1) *
                    this.staticEpochInterval +
                1
            );
        },

        // endBlock is the last block (block with the greatest height) of the epoch
        // It is calculated by finding how many epochs away it is from the current epoch,
        // and multiply that by the epoch interval. Subtract this number by the current epoch boundary we can get our desired result
        endBlock(epochNum) {
            var output =
                this.staticEpochBoundary -
                (this.staticLatestEpoch - epochNum) * this.staticEpochInterval;
            return output;
        },
    },

    mounted() {
        this.staticLatestEpoch = this.latestEpoch;
        this.staticEpochBoundary = this.epochBoundary;
        this.staticEpochInterval = this.epochInterval;
        if (this.staticLatestEpoch == 0) {
            this.unwatchLatestEpoch = this.$watch("latestEpoch", (newVal) => {
                if (newVal) {
                    this.staticLatestEpoch = this.latestEpoch;
                    this.unwatchLatestEpoch();
                }
            });
        }
        if (this.staticEpochBoundary == 0) {
            this.unwatchEpochBoundary = this.$watch(
                "epochBoundary",
                (newVal) => {
                    if (newVal) {
                        this.staticEpochBoundary = this.epochBoundary;
                        this.unwatchEpochBoundary();
                    }
                }
            );
        }
        if (this.staticEpochInterval == 0) {
            this.unwatchEpochInterval = this.$watch(
                "epochInterval",
                (newVal) => {
                    if (newVal) {
                        this.staticEpochInterval = this.epochInterval;
                        this.unwatchEpochInterval();
                    }
                }
            );
        }
    },
};
</script>

<template>
    <div class="epochingview-container">
        <p style="font-size: 3em">Epoching and Checkpointing</p>
        <div class="epoching-search">
            <form class="d-flex" role="search" @submit.prevent="submit">
                <input
                    class="form-control me-2"
                    v-model="searchText"
                    placeholder="Search epoch by epoch number"
                />
                <button class="btn btn-light" type="submit">Search</button>
            </form>
        </div>
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
                <div class="top-stats-content-value">
                    {{ staticEpochInterval }}
                </div>
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
        <div class="epoch-list">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Epoch</th>
                        <th>Blocks Included</th>
                        <th>Checkpoint</th>
                        <th>Confirmation Status</th>
                    </tr>
                </thead>
                <tbody>
                    <CheckPointingRowComponent
                        v-for="(epochNum, index) in range(pageStart, pageEnd)"
                        :epochNum="epochNum"
                        :staticBeginBlock="beginBlock(epochNum)"
                        :staticEndBlock="endBlock(epochNum)"
                        :key="epochNum"
                    />
                </tbody>
            </table>
            <div style="display: flex; justify-content: center">
                <button
                    @click="getPreviousPage()"
                    :disabled="!hasPreviousPage"
                    class="button-27"
                    role="button"
                >
                    Previous
                </button>
                <button
                    @click="getNextPage()"
                    :disabled="!hasNextPage"
                    class="button-27"
                    role="button"
                >
                    Next
                </button>
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
.me-2 {
    width: 400px;
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

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
}

.styled-table thead tr {
    background-color: black;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid black;
}

.button-27 {
    appearance: none;
    background-color: #000000;
    border: 2px solid #1a1a1a;
    border-radius: 15px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0 20px 0 20px;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 150px;
    will-change: transform;
}

.button-27:disabled {
    background-color: #333333;
    pointer-events: none;
}

.button-27:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}

.button-27:active {
    box-shadow: none;
    transform: translateY(0);
}
</style>
