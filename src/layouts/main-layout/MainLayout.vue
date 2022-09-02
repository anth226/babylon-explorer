<script lang="ts">
import NavBarComponent from '../../components/NavBarComponent.vue'
import ApprovalTable from '../../views/home/ApprovalTable.vue'


export default {
    name: 'MainLayout',
    components: {
        NavBarComponent,
        ApprovalTable
    }
}
</script>

<template>
    <div class="wrapper pb-4">
        <NavBarComponent />
        <div class="container mx-auto mt-5">
            <ApprovalTable />
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        background-image: url("../../assets/nav-overlay.jpg")
    }
</style>
