<script>

export default {
    name: 'BlockTableSection',
    props: {
        heading: String,
        col1: String,
        col2: String,
        col3: String,
        hasThreeCols: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        copiedText: 'THIS IS COPIED'
    }),
    computed: {
        latestBlocks() {
            try {
                return this.$store.getters["common/blocks/getBlocks"](8)
            } catch {
                return []
            }
        }
    },
    methods: {
        convertDate(date) {
            const currentDate = new Date()
            date = new Date()

            if (date.toLocaleString() === currentDate.toLocaleString()) {
                return 'Today ' + date.toLocaleString().substring(10)
            }
        },
        copyHash() {
            document.execCommand('copy')
        }
    }
}
</script>

<template>
        <div class="section font-semibold">
        <div class="heading flex justify-between">
            <div class="uppercase">
                {{ heading }}
            </div>
            <div>
                <slot name="count">123</slot>
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
            <slot name="body">

            </slot>
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
</style>
