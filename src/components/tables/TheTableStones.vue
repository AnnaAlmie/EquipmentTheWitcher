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
    <table data-table="stones">
        <thead>
            <tr>
                <th v-for="level of storeLang.lang.stonesLevel" v-text="level"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="stones in storeStones.tableCells" :key="stones.id">
                <td :data-cell="storeLang.lang.stones[stones.title]">
                    <img :src="`/EquipmentTheWitcher/stones/${stones.title}.webp`" />
                </td>
                <td>{{ storeLang.lang.stones[stones.title] }}</td>
                <td v-for="(cell, index) in stones.cells" :class="['td-point cell_size', cell]"
                    @click="changeClass(stones.id, index, cell)" :data-cell="storeLang.lang.stonesLevel[index + 2]"></td>
            </tr>
        </tbody>
    </table>
</template>