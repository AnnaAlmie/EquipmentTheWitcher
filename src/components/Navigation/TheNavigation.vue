<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useLanguageStore } from '@/stores/store'
import ThePlayer from './ThePlayer.vue';

const storeLang = useLanguageStore();
let appearPlayer = ref<boolean>(false);

let background = computed(() => {
    return storeLang.lang ? 'background: var(--color-grey)' : 'background: var(--color-orange)'
})

onMounted(() => {
    setTimeout(() => {
        appearPlayer.value = true
    }, 1000)
})

</script>

<template>
    <Transition name="slide-fade" v-show="appearPlayer">
        <div class="aside_nav" :style="background">
            <v-switch hide-details inset :modelValue="storeLang.lang"
                @update:modelValue="storeLang.$changeLang()"></v-switch>
            <ThePlayer />
            <a href="https://github.com/AnnaAlmie/EquipmentTheWhitcher/tree/dev" target="_blank"
                rel="noopener noreferrer" title="Code review / Перегляд коду">
                <mdicon name="folder-eye-outline" />
            </a>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.aside_nav {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 50%;
    transform: translate(-2px, -50%);
    background: var(--color-grey);
    padding: 10px;
    border: 1px solid var(--color-indigo);
    border-radius: 0 5px 5px 0;
    color: #fff;
    text-align: center;
    transition: 0.5s ease;
}

// transitions 
.slide-fade- {
    &enter-active {
        transition: all 0.3s ease-out;
    }

    &leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    &enter-from,
    &leave-to {
        transform: translate(-100%, -50%);
        opacity: 0;
    }
}
</style>
