<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useLanguageStore } from '@/stores/store';
import ThePlayer from './ThePlayer.vue';

const store = useLanguageStore();
let appearPlayer = ref<boolean>(false);

let background = computed(() => {
    return store.status ? 'background: var(--color-grey)' : 'background: var(--color-orange)'
})

onMounted(() => {
    setTimeout(() => {
        appearPlayer.value = true
    }, 1000)
})
</script>

<template>
    <Transition name="slide-fade" v-show="appearPlayer">
        <aside class="aside_nav" :style="background">
            <v-switch hide-details inset :modelValue="store.status" @update:modelValue="store.$changeStatus()"></v-switch>
            <ThePlayer />
            <a class="icon_nav" href="https://github.com/AnnaAlmie/EquipmentTheWitcher/tree/dev" target="_blank"
                rel="noopener noreferrer" :title="store.lang.code">
                <mdicon name="github" width="30" height="30" />
            </a>
        </aside>
    </Transition>
</template>

<style lang="scss" scoped>
.aside_nav {
    position: fixed;
    z-index: 10;
    background: var(--color-grey);
    padding: 10px;
    border: 1px solid var(--color-indigo);
    color: #fff;
    text-align: center;
    transition: 0.5s ease;
}

@media screen and (max-width: 1059px) {
    .aside_nav {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 2px);
        border-radius: 5px 5px 0 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 10px;

        .icon_nav {
            margin-left: 10px;
        }
    }

    .slide-fade- {

        &enter-from,
        &leave-to {
            transform: translate(-50%, 100%);
            opacity: 0;
        }
    }
}

@media screen and (min-width: 1060px) {
    .aside_nav {
        left: 0;
        top: 50%;
        transform: translate(-2px, -50%);
        border-radius: 0 5px 5px 0;
    }

    .slide-fade- {

        &enter-from,
        &leave-to {
            transform: translate(-100%, -50%);
            opacity: 0;
        }
    }
}

// transitions 
.slide-fade- {
    &enter-active {
        transition: all 0.3s ease-out;
    }

    &leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }


}
</style>
