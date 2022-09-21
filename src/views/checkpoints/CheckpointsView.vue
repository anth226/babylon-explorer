<script lang="ts">
import NavBarComponent from '../../components/NavBarComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CheckpointsView',
    components: {
        NavBarComponent
    }
})
</script>

<template>
    <NavBarComponent />
    <h1>CheckpointsView</h1>
</template>
