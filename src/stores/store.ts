import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ua, en } from '@/language/language';
import { table } from '@/language/table';



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
  const tableCells = useStorage("cellStatus", table);

  function $changeCellStatus() {
    console.log(table)
  }

  return { tableCells, $changeCellStatus }
})