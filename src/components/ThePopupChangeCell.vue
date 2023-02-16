<!-- "default", "loot", "craft" -->
<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useGearStore } from '@/stores/store';

const storeGear = useGearStore();

const dialog = ref<boolean>(true)
</script>

<template>
    <v-dialog v-model="dialog" width="auto">
        <v-card>
            <v-card-title>
                Dialog 1
            </v-card-title>

            <v-card-actions>
                <v-btn color="black" variant="tonal" @click="storeGear.$changeCellStatus('craft')">
                    Crafted
                </v-btn>
                <v-btn color="black" variant="tonal" @click="storeGear.$changeCellStatus('loot')">
                    Found
                </v-btn>
                <v-btn color="black" variant="tonal" @click="storeGear.$changeCellStatus('default')">
                    Default
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- @click="storeGear.$changeCellStatus(gear.id, index, 'loot')" -->
</template>

<style lang="scss" scoped>

</style> 