<script lang="ts">
export default {
    name: 'BlockTableSection',
    props: {
        heading: {
            type: String,
            default: 'Heading'
        },
        count: {
            // For the design, it will be integer
            type: String,
            default: '0'
        },
        col1: String,
        col2: String,
        col3: String,
        hasThreeCols: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        latestBlocks() {
            try {
                return this.$store.getters["common/blocks/getBlocks"](8)
            } catch {
                return []
            }
        },
        convertDate() {

        }
    }
}
</script>

<template>
        <div class="section font-semibold">
        <div class="heading flex justify-between">
            <div>
                {{ heading }}
            </div>
            <div>
                {{ count }}
            </div>
        </div>
        <div class="subheading flex justify-between">
            <div>
                {{ col1 }}
            </div>
            <div>
                {{ col2 }}
            </div>
            <div v-if="hasThreeCols">
                {{ col3 }}
            </div>
        </div>
        <div v-for="block in latestBlocks" class="item flex justify-between">
            <div>
                1234
            </div>
            <div v-if="hasThreeCols">
<!--                {{ block.hash }}--> block hash
            </div>
            <div class="font-bold">
<!--                {{ block.timestamp }}-->
                32
            </div>
        </div>
    </div>
</template>

<style scoped>
    .section {
        padding: 30px;
        border-right: 1px solid rgba(51, 51, 51, 0.05);
    }
    .heading {
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0.11em;
        text-transform: uppercase;
        color: var(--primary-blue);
        border-bottom: 2px solid var(--primary-blue);
        padding-bottom: 15px;
    }
    .subheading {
        padding: 15px 0 10px 0;
        font-size: 16px;
        line-height: 32px;
        color: var(--text-dark);
    }
    .item {
        border-top: 1px solid rgba(51, 51, 51, 0.05);
        padding: 8px 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 32px;
        color: var(--text-dark);
    }
</style>
