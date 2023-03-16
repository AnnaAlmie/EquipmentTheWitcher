<script setup lang="ts">
import { useLanguageStore, useStonesStore } from '@/stores/store';

const storeLang = useLanguageStore();
const storeStones = useStonesStore();

function changeClass(id: number, index: number, cell: string) {
    storeStones.idCell = id;
    storeStones.indexCell = index;
    cell === "default" ? storeStones.$changeCellStatus('loot') : storeStones.$changeCellStatus('default')

}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th v-for="level of storeLang.lang.stonesLevel" v-text="level"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="stones in storeStones.tableCells" :key="stones.id">
                <td> <img :src="`src/assets/img/stones/${stones.title}.webp`" /> </td>
                <td>{{ storeLang.lang.stones[stones.title] }}</td>
                <td v-for="(cell, index) in stones.cells" :class="['td-point cell_size', cell]"
                    @click="changeClass(stones.id, index, cell)"></td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss">
.cell_size {
    @media screen and (min-width: 967px) {
        min-width: 14.7em;
    }


}
</style>