<script setup lang="ts">
import { ref } from 'vue';
import { useLanguageStore, useGearStore } from '@/stores/store';

const storeGear = useGearStore();
const LanguageStore = useLanguageStore();
const dialog = ref<boolean>(true)
</script>

<template>
    <v-dialog v-model="dialog" width="auto">
        <v-card>
            <v-card-title class="text-center">
                {{ LanguageStore.lang.popup.title }}
            </v-card-title>
            <v-card-text>
                <v-btn class="craft w-100" variant="tonal" @click="storeGear.$changeCellStatus('craft')">
                    {{ LanguageStore.lang.popup.craft }}
                </v-btn>
                <v-btn class="loot w-100 mt-4" variant="tonal" @click="storeGear.$changeCellStatus('loot')">
                    {{ LanguageStore.lang.popup.loot }}
                </v-btn>
                <v-btn class="default w-100 mt-4" variant="tonal" @click="storeGear.$changeCellStatus('default')">
                    {{ LanguageStore.lang.popup.default }}
                </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<style lang="scss" scoped>
.craft {
    color: var(--color-craft)
}

.loot {
    color: var(--color-loot)
}

.default {
    color: var(--color-indigo)
}
</style> 