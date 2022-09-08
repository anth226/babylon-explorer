<script>
import moment from 'moment'

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
    data: () => ({
        timestamp: "",
        date: "",
        time: "",
        currentYear: "",
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
            // return moment(date).format('MM/DD/YYYY')
            date = new Date()
            return date.toLocaleString()
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
        <div v-for="(block, index) in latestBlocks" class="item flex justify-between">
            <div>
                {{ index + 1 }}
            </div>
            <div class="compress" v-if="hasThreeCols">
                {{ block.hash }}
            </div>
            <div class="font-bold compress">
                {{ convertDate(block.timestamp) }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .compress {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 120px;
    }
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
        font-size: 13px;
        line-height: 32px;
        color: var(--text-dark);
    }
</style>
