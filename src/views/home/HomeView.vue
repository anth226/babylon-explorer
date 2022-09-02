<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'
import BlockTable from './BlockTable.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        NavBarComponent,
        BlockTable
    }
}
</script>

<template>
    <div>
        <div class="main">
            <NavBarComponent />
            <div class="mt-5 pb-4">
                <ApprovalTable />
            </div>
        </div>
        <BlockTable />
    </div>
</template>

<style scoped>
.main {
    background-image: url('../../assets/nav-overlay.jpg');
}
</style>
