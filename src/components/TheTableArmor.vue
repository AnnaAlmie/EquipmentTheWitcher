<script setup lang="ts">
import { ref, computed } from 'vue';
import { levels, equipments, schools } from '../language/ua';

let titles = computed(() => {
    let arr = levels.map((level) => {
        return equipments.map((equipment) => {
            return level + " " + equipment
        })
    })
    return Array.prototype.concat.apply([], arr)
})

</script>

<template>
    <div>
        <table>
            <thead>
                <td>Школа</td>
                <td v-for="school of schools" v-text="school"></td>
            </thead>
            <tbody>
                <tr v-for="title in titles">
                    <td>{{ title }}</td>
                    <td v-for="item in schools.length">-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
table {
    width: max-content;
    border: 1px solid transparent;
    background-color: rgba($color: var(--color-indigo-opacity), $alpha: 0.5);

    td {
        border: 1px solid #000;
        background-color: rgba($color: #fff, $alpha: 0.9);
        white-space: nowrap;
        padding: 10px;

        &:not(:first-child) {
            width: 100px;
        }
    }

}
</style>