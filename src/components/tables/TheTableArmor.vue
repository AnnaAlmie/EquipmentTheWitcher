<script setup lang="ts">
import { ref } from 'vue';
import { useLanguageStore, useGearStore } from '@/stores/store';
import ThePopupChangeCell from '@/components/ThePopupChangeCell.vue'

const storeLang = useLanguageStore();
const storeGear = useGearStore();
const popup = ref<boolean>(false);

function changeClass(id: number, index: number) {
    storeGear.idCell = id;
    storeGear.indexCell = index;
    popup.value = true
}
</script>

<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="school of storeLang.lang.schools" v-text="school"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="gear in storeGear.tableCells" :key="gear.id">
                    <td>{{ storeLang.lang.gear[gear.title] }}</td>
                    <td v-for="(cell, index) in gear.cells" :class="['td-point', cell]"
                        @click="changeClass(gear.id, index)"></td>
                </tr>
            </tbody>
        </table>
        <ThePopupChangeCell v-if="popup" @click="popup = false" />
    </div>
</template>

<style lang="scss"></style>