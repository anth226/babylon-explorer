<script lang="ts">
import ApprovalTable from '../../views/home/ApprovalTable.vue'


export default {
    name: 'MainLayout',
    components: {
        ApprovalTable
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
</template>

<style scoped>
    .overlay {
        position: absolute;
        top: -10px;
        left: 0;
        z-index: -1;
    }
</style>
