<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'
import BlockTable from './BlockTable.vue'
import BtcBlockGrid from '../home/BtcBlockGrid.vue'
import EpochGrid from '../home/EpochGrid.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        NavBarComponent,
        BlockTable,
        BtcBlockGrid,
        EpochGrid
    }
}
</script>

<template>
    <div class="wrapper pb-4">
        <img class="overlay" src="../../assets/nav-overlay.png" />
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
