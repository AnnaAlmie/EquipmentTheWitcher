<script setup lang="ts">
import { ref } from 'vue';
import { useLanguageStore, useGearStore } from '@/stores/store';

const storeGear = useGearStore();
const LanguageStore = useLanguageStore();
const lang = LanguageStore.lang.popup;
const dialog = ref<boolean>(true);
</script>

<template>
    <v-dialog v-model="dialog" width="auto">
        <v-card>
            <v-card-title class="text-center">
                {{ lang.title }}
            </v-card-title>
            <v-card-text>
                <v-btn class="craft w-100" size="x-large" variant="tonal" @click="storeGear.$changeCellStatus('craft')">
                    {{ lang.craft }}
                </v-btn>
                <v-btn class="loot w-100 mt-4" size="x-large" variant="tonal" @click="storeGear.$changeCellStatus('loot')">
                    {{ lang.loot }}
                </v-btn>
                <v-btn class="default w-100 mt-4" size="x-large" variant="tonal"
                    @click="storeGear.$changeCellStatus('default')">
                    {{ lang.default }}
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