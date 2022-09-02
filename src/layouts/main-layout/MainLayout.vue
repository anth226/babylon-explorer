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
    <div class="wrapper">
        <div class="img-overlay">
            <NavBarComponent />
            <div class="container mx-auto mt-5 pb-4">
                <ApprovalTable />
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-overlay {
    background-image: url("../../assets/nav-overlay.jpg");
}
</style>
