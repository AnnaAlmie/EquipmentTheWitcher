import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {

  const lang = ref<boolean>(true);

  function changeLang() {
    lang.value = !lang.value
  }

  return { lang, changeLang }
})