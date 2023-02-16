import { ref } from 'vue'
import { defineStore } from 'pinia';
import { ua, en } from '@/language/language';

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


  return {}
})