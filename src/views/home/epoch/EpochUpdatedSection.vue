<script lang="ts">
import EpochBlock from './EpochBlock.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EpochSection',
    components: {
        EpochBlock
    },
    data: () => ({
        epochs: []
    }),
    computed: {
        getCurrentEpoch() {
            try {
                return this.epochs.push(this.$store.getters['epoching/stats/getCurrentEpoch'])
            } catch {
                return 0
            }
        }
    }
})
</script>

<template>
    <div :style="{ left: distance + 'px' }" class="main-section animate__animated animate__backInRight mx-4">
        <div class="flex items-center">
            <EpochBlock
                has-arrow
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

.circle {
    border: 2px solid black;
    position: relative;
    top: 0;
    right: 0;
    height: 10px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 10px;
}

.capsul {
    display: flex;
    position: absolute;
    left: 274px;
    top: -12px;
    justify-content: center;
    border-radius: 50px;
    background: white;
    width: fit-content;
    padding: 3px;
    z-index: 2;
}

</style>
