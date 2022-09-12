<script>

import NavBarComponent from '../../components/NavBarComponent.vue'
export default {
    name: 'BlocksView',
    components: {
        NavBarComponent
    },
    data: function () {
        return {
            pageSize: 10,
            page: 0, // the current page user is on
            gotPage: 0, // the furthest page user has been to
        };
    },

    beforeMount() {
        this.$store.dispatch("blocks/blockList/init");
    },

    methods: {
        /*
         * only fetch block from server if page > gotPage (have not been this deep before).
         * no need to fetch block from server if getting prevous page.
         * since there's no way right now for user to go to a specific page, this works.
         */
        getNextPage() {
            this.page += 1;
            if (this.page > this.gotPage) {
                this.gotPage += 1;
                this.$store.dispatch("blocks/blockList/getNext");
            }
        },
        getPreviousPage() {
            this.page -= 1;
        },
    },

    computed: {
        chainHeight() {
            return this.$store.getters["blocks/blockList/getHeight"];
        },
        blockList() {
            return this.$store.getters["blocks/blockList/getBlocks"];
        },
        currentPage() {
            try {
                let pageStart = this.page * this.pageSize;
                let pageEnd = pageStart + this.pageSize;
                return this.blockList.slice(pageStart, pageEnd);
            } catch {
                return [];
            }
        },
        hasPreviousPage() {
            return this.page != 0;
        },
        hasNextPage() {
            return this.$store.getters["blocks/blockList/getHasNext"];
        },
    },
};
</script>

<template>
    <NavBarComponent />
    <div class="container mx-auto mt-5">
        <div>
            <table class="styled-table">
                <thead>
                <tr>
                    <th>Height</th>
                    <th>Hash</th>
                    <th>Time</th>
                    <th>Num Txs</th>
                    <th>Proposer Address</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="block in currentPage" :key="block.height">
                    <td>
                        <RouterLink
                            :to="{ path: '/block/' + block.height }"
                            class="font-bold"
                        >
                            {{ block.height }}
                        </RouterLink>
                    </td>
                    <td>{{ block.hash }}</td>
                    <td>{{ block.timestamp }}</td>
                    <td>{{ block.txDecoded.length }}</td>
                    <td>{{ block.proposer }}</td>
                </tr>
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

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    width: 100%;
    box-shadow: 0 27px 81px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
    padding: 12px;
}

.wrapper {
    background: white;
    box-shadow: 0 27px 81px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
    padding: 12px;
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


.button-27 {
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
