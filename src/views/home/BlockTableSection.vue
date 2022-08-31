<script>
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
        col1:String,
        col2:String,
        col3:String,
        hasThreeCols: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div class="section">
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
        <div v-for="index in 5" :key="index" class="item flex justify-between">
            <div>
                1234
            </div>
            <div>
                0x231293810928
            </div>
            <div v-if="hasThreeCols">
                1231423498
            </div>
        </div>
    </div>
</template>

<style scoped>
    .section {
        padding: 30px;
    }
    .heading {
        font-weight: 600;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0.11em;
        text-transform: uppercase;
        color: #010CC2;
        border-bottom: 2px solid #010CC2;
        padding-bottom: 15px;
    }
    .subheading {
        padding: 15px 0 10px 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        color: #212121;
    }
    .item {
        border-top: 1px solid rgba(51, 51, 51, 0.05);
        padding: 8px;
        font-weight: 400;
        font-size: 14px;
        line-height: 32px;
        color: #212121;
    }

</style>
