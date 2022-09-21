<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideArrowsComponent',
    methods: {
        scrollTo(element, scrollPixels, duration) {
            const scrollPos = element.scrollLeft
            if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)))
            {
                const startTime =
                    "now" in window.performance
                        ? performance.now()
                        : new Date().getTime()

                function scroll(timestamp) {
                    const timeElapsed = timestamp - startTime
                    const progress = Math.min(timeElapsed / duration, 1)
                    element.scrollLeft = scrollPos + scrollPixels * progress
                    if (timeElapsed < duration) {
                        window.requestAnimationFrame(scroll)
                    } else {
                        return
                    }
                }
                window.requestAnimationFrame(scroll)
            }
        },
        clickLeft() {
            this.$emit('clickedLeft')
        },
        clickRight() {
            this.$emit('clickedRight')
        }
    }
})
</script>

<template>
    <div class="absolute">
        <svg id="left-button" @click="clickLeft" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-square-fill arrow-left" viewBox="0 0 16 16">
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
        </svg>
    </div>
    <div class="absolute">
        <svg id="right-button" @click="clickRight" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-square-fill arrow-right" viewBox="0 0 16 16">
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
        </svg>
    </div>
</template>

<style scoped>
.arrow-left {
    display: flex;
    position: absolute;
    top: 30px;
    left: -52px;
    color: #b2b2b2;
    border-radius: 15px;
    width: 30px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.arrow-left:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    transition-duration: 300ms;
    color: var(--primary-blue);
}

.arrow-right {
    display: flex;
    position: relative;
    top: 30px;
    left: 1770px;
    color: #b2b2b2;
    border-radius: 15px;
    width: 30px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.arrow-right:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    transition-duration: 300ms;
    color: var(--primary-blue);
}
</style>
