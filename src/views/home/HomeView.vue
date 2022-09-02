<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        NavBarComponent
    }
}
</script>

<template>
    <div>
        <NavBarComponent />
        <ApprovalTable />
    </div>
</template>
