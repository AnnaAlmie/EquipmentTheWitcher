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
                    <td v-for="item in schools.length">1</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">

</style>