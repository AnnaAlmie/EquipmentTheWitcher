import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ua, en } from '@/language/language';
import { gearTable, stonesTable } from '@/language/table';

export const useLanguageStore = defineStore('language', () => {

  const status = ref<boolean>(true);
  const lang = ref(ua);

  function $changeStatus() {
    status.value = !status.value;
    status.value ? lang.value = ua : lang.value = en;
  }

  return { status, lang, $changeStatus }
})

export const useGearStore = defineStore('gear', () => {
  const tableCells = useStorage("gearСellStatus", gearTable);
  const idCell = ref<number>(0);
  const indexCell = ref<number>(0);

  function $changeCellStatus(status: string) {
    let selectedCell = tableCells.value.find(item => {
      return item.id === idCell.value
    })

    if (selectedCell) {
      selectedCell.cells[indexCell.value] = status
    }
  }

  return { tableCells, idCell, indexCell, $changeCellStatus }
})

export const useStonesStore = defineStore('stones', () => {
  const tableCells = useStorage("stonesСellStatus", stonesTable);
  const idCell = ref<number>(0);
  const indexCell = ref<number>(0);

  function $changeCellStatus(status: string) {
    let selectedCell = tableCells.value.find(item => {
      return item.id === idCell.value
    })

    if (selectedCell) {
      selectedCell.cells[indexCell.value] = status
    }
  }

  return { tableCells, idCell, indexCell, $changeCellStatus }
})