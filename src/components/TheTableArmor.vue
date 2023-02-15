<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/store';
const store = useLanguageStore();

let tdClass = ref<string>("default")
// let titles = computed(() => {
//     let arr = levels.map((level) => {
//         return equipments.map((equipment) => {
//             return level + " " + equipment
//         })
//     })
//     return Array.prototype.concat.apply([], arr)
// })

</script>

<template>
    <div>
        <table>
            <thead>
                <td>{{ store.lang.school }}</td>
                <td v-for="school of store.lang.schools" v-text="school"></td>
            </thead>
            <tbody>
                <tr v-for="armor in store.lang.armor" :key="armor.id">
                    <td>{{ armor.title }}</td>
                    <td v-for="col in store.lang.schools.length" :class="['td-point', tdClass]"></td>
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

    td {
        border: 1px solid #000;
        background-color: rgba($color: #fff, $alpha: 0.8);
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

}
</style>