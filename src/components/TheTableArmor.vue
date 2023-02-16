<script setup lang="ts">
import { ref } from 'vue';
import { useLanguageStore, useGearStore } from '@/stores/store';
import ThePopupChangeCell from '@/components/ThePopupChangeCell.vue'

const storeLang = useLanguageStore();
const storeGear = useGearStore();
const popup = ref<boolean>(false);

function changeClass(id: number, index: number) {
    let idCell = `${id}.${index}`
    console.log(idCell)
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
                        @click="changeClass(gear.id, index)">{{ gear.id }} {{ index }} </td>
                </tr>
            </tbody>
        </table>
        <ThePopupChangeCell v-if="popup" />
    </div>
</template>

<style lang="scss">
table {
    padding: 20px 0;
    width: max-content;
    border: 1px solid transparent;
    background-color: transparent;
    position: relative;
    margin: 0 auto;

    td,
    th {
        font-weight: 600;
        border: 1px solid #000;
        background-color: rgba($color: #fff, $alpha: 0.7);
        white-space: nowrap;
        padding: 10px;

        &:not(:first-child) {
            width: 100px;
            text-align: center;
        }

        &.td-point {
            cursor: pointer;

            &:hover {
                background-color: rgba($color: #fff, $alpha: 0.7);
            }
        }


        //status
        &.default {
            background-color: rgba($color: #fff, $alpha: 0.2);
        }

        &.loot {
            background-color: var(--color-orange);
        }

        &.craft {
            background-color: var(--color-blue);
        }
    }

    th {
        position: sticky;
        top: 0;
        background-color: rgba($color: #fff, $alpha: 1);
    }

}
</style>