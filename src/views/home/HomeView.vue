<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarExtendedComponent.vue'
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
    <NavBarComponent />
    <div class="wrapper pb-4">
        <img class="overlay" src="../../assets/nav-overlay.png" alt="nav-overlay" />
        <div class="container mx-auto pt-5">
            <ApprovalTable />
        </div>
    </div>
    <div class="container mx-auto">
        <div class="content">
            <div class="blocks-container">
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
    top: -20px;
    left: 0;
    z-index: -1;
    height: 42%;
}

@media (max-width: 1600px) {
    .overlay {
        position: absolute;
        top: -10px;
        left: 0;
        z-index: -1;
        height: 44%;
    }
}

@media (max-width: 1538px) {
    .blocks-container {
        display: none;
    }
}

@media(max-width: 1200px) {
    .content {
        margin: 0;
    }
}
</style>
