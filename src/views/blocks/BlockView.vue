<script>
import NavBarComponent from '../../components/NavBarComponent.vue'
export default {
    components: {
        NavBarComponent
    },
    data() {
        return {
            loading: false,
            block: null,
            error: null,
        };
    },
    computed: {
        blockDate() {
            let date = new Date(this.block.timestamp);
            return date.toLocaleString();
        },
        chainHeight() {
            return this.$store.getters["common/blocks/getHeight"];
        },
    },
    created() {
        this.$watch(
            () => this.$route.params.blockID,
            () => {
                this.fetchData();
            },
            { immediate: true }
        );
    },
    methods: {
        fetchData() {
            this.error = this.block = null;
            this.loading = true;
            let searchParam = this.$route.params.blockID;

            // prevent undesirable behavior when router link completely changes
            if (typeof searchParam == "undefined") return;

            var searchFunction = "blocks/blockList/getBlockByHash";
            //determins whether the search is by height or by hash
            if (!isNaN(searchParam)) {
                searchFunction = "blocks/blockList/getBlockByHeight";
            }

            this.$store.dispatch(searchFunction, searchParam).then(
                (response) => {
                    this.loading = false;
                    this.block = response;
                },
                (error) => {
                    this.loading = false;
                    this.error = "Block not found";
                }
            );
        },
        directToPrevious() {
            this.$router.push({
                path: "/blocks/" + (parseInt(this.block.height) - 1),
            });
        },
        directToNext() {
            this.$router.push({
                path: "/blocks/" + (parseInt(this.block.height) + 1),
            });
        },
    },
};
</script>

<template>
    <NavBarComponent />
    <div class="container mx-auto">
        <div v-if="loading" class="loading">Loading...</div>

        <div v-if="error" class="error">{{ error }}</div>

        <div class="shadow-2xl px-4 py-2 rounded-2xl mt-5">
            <div v-if="block" class="block-content">
                <div>
                    <div class="block-title">
                        <img src="../../assets/block.png" />
                        <div style="font-size: 3em; margin-left: 0.2em">
                            Block {{ block.height }}
                        </div>
                    </div>
                    <div>{{ block.hash }}</div>
                </div>

                <div style="display: flex; justify-content: space-between">
                    <div v-if="block.height > 1">
                        <button
                            @click="directToPrevious()"
                            class="button-64"
                            role="button"
                        >
                            <span class="text">Previous</span>
                        </button>
                    </div>
                    <div v-if="block.height < this.chainHeight">
                        <button
                            @click="directToNext()"
                            class="button-64"
                            role="button"
                        >
                            <span class="text">Next</span>
                        </button>
                    </div>
                </div>

                <div class="stats-box">
                    <hr />
                    <div class="stats-box-row">
                        <div>HEIGHT</div>
                        <div>{{ block.height }}</div>
                    </div>
                    <hr />
                    <div class="stats-box-row">
                        <div>TIME</div>
                        <div>{{ blockDate }}</div>
                    </div>
                    <hr />
                    <div class="stats-box-row">
                        <div>TRANSACTIONS</div>
                        <div>{{ block.txDecoded.length }}</div>
                    </div>
                    <hr />
                </div>

                <div class="transaction-list">
                    <div style="font-weight: 700; font-size: 1.5em">
                        Transactions
                    </div>
                    <table class="styled-table">
                        <thead>
                        <tr>
                            <th>Hash</th>
                            <th>Transaction Fee</th>
                            <th>Size</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="tx in block.txDecoded" :key="tx.txHash">
                            <td>{{ tx.txHash }}</td>
                            <td>
                                {{ tx.auth_info.fee.amount[0].amount }} stakes
                            </td>
                            <td>
                                {{
                                    (
                                        (encodeURI(JSON.stringify(tx)).split(
                                                /%..|./
                                            ).length -
                                            1) /
                                        1024
                                    ).toFixed(2)
                                }}
                                kB
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blockview-container {
    max-width: 1280px;
}
.block-title {
    display: flex;
    align-items: center;
}

.block-content > div {
    margin-top: 3em;
}

.stats-box {
    background: none;
    box-shadow: 1px 0px 5px 1px lightgray;
    padding: 30px;
    border-radius: 8px;
}

.stats-box-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button-64 {
    appearance: none;
    background-color: var(--primary-blue);
    border-radius: 15px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
    min-height: 60px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
}


.button-64:hover span {
    transform: translateY(-2px);}

@media (min-width: 768px) {
    .button-64 {
        font-size: 14px;
        min-width: 100px;
    }
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
    background-color: var(--primary-blue);
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

</style>
