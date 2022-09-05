<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'
import BlockTable from './BlockTable.vue'
import BtcBlockGrid from '../home/BtcBlockGrid.vue'
import EpochGrid from '../home/EpochGrid.vue'

import MainLayout from '../../layouts/main-layout/MainLayout.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        NavBarComponent,
        BlockTable,
        MainLayout,
        BtcBlockGrid,
        EpochGrid
    }
}
</script>

<template>
    <MainLayout />
    <div class="container mx-auto">
        <div class="content">
            <BtcBlockGrid />
            <EpochGrid />
            <BlockTable />
        </div>
    </div>
</template>

<style scoped>
.content {
    margin: 0 85px;
}

@media(max-width: 1200px) {
    .content {
        margin: 0;
    }
}
</style>
