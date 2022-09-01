<script>
export default {
    name: 'EpochItem',
    props: {
        epochNum: String,
        blocksNum: String,
        hasArrow: {
            type: Boolean,
            default: true
        },
        arrowLength: String,
        position: String
    }
}
</script>

<template>
    <div :style="{right: position + 'px'}" class="item flex items-center ml-1">
        <div class="epoch">
            <div class="heading font-bold">epoch {{ epochNum }}</div>
            <div class="subheading font-light">{{ blocksNum }} blocks</div>
        </div>
        <div v-if="hasArrow">
            <img v-if="arrowLength === 'long'"  class="long-arrow-left" src="../../assets/long-arrow-left.svg" alt="long-arrow-left">
            <img v-if="arrowLength === 'short'" class="short-arrow-left" src="../../assets/short-arrow-left.svg" alt="short-arrow-left">
            <img v-if="arrowLength === 'medium'" class="medium-arrow-left" src="../../assets/medium-arrow-left.svg" alt="medium-arrow-left">
        </div>
    </div>
</template>

<style scoped>

.item {
    position: relative;
}

.epoch {
    left: 20px;
    font-size: 24px;
    line-height: 24px;
    color: #f3f3f3;
}

.subheading {
    margin-top: 8px;
    font-weight: 300;
}

.long-arrow-left {
    width: 230px;
    height: 12px;
    margin-left: 50px;
}
.short-arrow-left {
    width: 78px;
    height: 12px;
    margin-left: 90px;
}

.medium-arrow-left {
    width: 155px;
    height: 12px;
    margin-left: 50px;
    margin-right: 20px;
}

</style>
