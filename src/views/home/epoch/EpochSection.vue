<script lang="ts">
import EpochBlock from './EpochBlock.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EpochSection',
    components: {
        EpochBlock
    }
})
</script>

<template>
    <!--    <CurvedArrow />-->
    <div class="main-section animate__animated animate__backInRight mx-4">
        <div class="flex items-center">
            <EpochBlock
                has-arrow
                has-long-arrow
            />
            <EpochBlock
                has-arrow
            />
            <div class="dots">
                ...
            </div>
            <EpochBlock />
            <EpochBlock
                has-arrow
                has-curved-arrow
            />

        </div>
        <div class="blank w-full bg-red-400"></div>
        <div class="title-section w-full mt-3">
            <div class="heading">
                Epoch {{ getCurrentEpoch }}
            </div>
            <div class="subheading">
                (100 blocks) : data
            </div>
        </div>
    </div>
</template>

<style scoped>

.title-section {
    text-align: center;
}

.heading {
    font-weight: 600;
    font-size: 18px;
}

.subheading {
    font-weight: 300;
    font-size: 12px;
}

.blank {
    height: 10px;
    background: var(--primary-blue);
    opacity: 0.1;
    border-radius: 15px;
    position: relative;
    top: 9px;
}

/*.dots {*/
/*    margin: 0 10px;*/
/*}*/

.main-section {
    align-items: center;
    position: relative;
    top: 27px;
}

</style>
