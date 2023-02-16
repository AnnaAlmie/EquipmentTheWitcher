<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/store';
const store = useLanguageStore();

let tdClass = ref<string>("default")

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
                    <th>{{ store.lang.school }}</th>
                    <th v-for="school of store.lang.schools" v-text="school"></th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="armor in store.lang.armor" :key="armor.id">
                    <td>{{ armor.title }}</td>
                    <td v-for="(col, index) in store.lang.schools.length" :class="['td-point', tdClass]"
                        @click="changeClass(armor.id, index)">{{ armor.id }} {{ index }}</td>
                </tr>
            </tbody>
        </table>
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
        }

        //status
        &.default:not(:hover) {
            background-color: rgba($color: #fff, $alpha: 0.2);
        }
    }

    th {
        position: sticky;
        top: 0;
        background-color: rgba($color: #fff, $alpha: 1);
    }

}
</style>