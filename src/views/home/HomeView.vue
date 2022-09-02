<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'
import BlockTable from './BlockTable.vue'

import MainLayout from '../../layouts/main-layout/MainLayout.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        NavBarComponent,
        BlockTable,
        MainLayout
    }
}
</script>

<template>
    <MainLayout />
    <div class="container">
        <BlockTable />
    </div>
</template>

<style scoped>
.main {
    background-image: url('../../assets/nav-overlay.jpg');
}
</style>
