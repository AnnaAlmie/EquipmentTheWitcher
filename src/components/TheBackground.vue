<script setup lang="ts">
import { useLanguageStore } from '@/stores/store'

const storeLang = useLanguageStore()
</script>

<template>
    <div class="full-background">
        <Transition name="fade" mode="out-in">
            <img src="@/assets/img/bg/bg-openworld.jpg" v-if="storeLang.lang" alt="full screen background" />
            <img src="@/assets/img/bg/bg-nextgen.jpg" v-else alt="full screen background" />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.full-background {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-grey);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style> 