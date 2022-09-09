<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'
import BlockTable from './block-table/BlockTable.vue'
import BtcBlockGrid from './btc-block/BtcBlockGrid.vue'
import EpochGrid from './epoch/EpochGrid.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        NavBarComponent,
        BlockTable,
        BtcBlockGrid,
        EpochGrid
    },
    beforeMount() {
        this.$store.dispatch("addresses/validatorStats/getNumValidators")
    },
}
</script>

<template>
    <div class="wrapper pb-4">
        <img class="overlay" src="../../assets/nav-overlay.png" alt="nav-overlay" />
        <div class="container mx-auto pt-5">
            <ApprovalTable />
        </div>
    </div>
    <div class="container mx-auto">
        <div class="content">
            <div class="wrapper">
                <BtcBlockGrid />
                <EpochGrid />
            </div>
            <BlockTable />
        </div>
    </div>
</template>

<style scoped>
.content {
    margin: 0 85px;
}

.overlay {
    position: absolute;
    top: -10px;
    left: 0;
    z-index: -1;
}

@media(max-width: 1200px) {
    .content {
        margin: 0;
    }
}

@media (max-width: 1538px) {
    .wrapper {
        display: none;
    }
}
</style>
