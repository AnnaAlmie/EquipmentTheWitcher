<script setup lang="ts">
import { ref } from "vue";
import type { TStatus } from "@/utils/types";
import { useLanguageStore, useSchoolGearStore } from "@/stores/store";

const props = defineProps<{
  id: string;
}>();

const storeGear = useSchoolGearStore();
const LanguageStore = useLanguageStore();
const lang = LanguageStore.lang.popup;
const dialog = ref<boolean>(true);

const clickButtonStatus = (status: TStatus) => {
  storeGear.$changeGearStatus(props.id, status);
};
</script>

<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-title class="text-center">
        {{ lang.title }}
      </v-card-title>
      <v-card-text>
        <v-btn
          class="craft w-100"
          size="x-large"
          variant="tonal"
          @click="clickButtonStatus('crafted')"
        >
          {{ lang.crafted }}
        </v-btn>
        <v-btn
          class="loot w-100 mt-4"
          size="x-large"
          variant="tonal"
          @click="clickButtonStatus('equipped')"
        >
          {{ lang.equipped }}
        </v-btn>
        <v-btn
          class="default w-100 mt-4"
          size="x-large"
          variant="tonal"
          @click="clickButtonStatus('default')"
        >
          {{ lang.default }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
//mobile
@media screen and (max-width: 966px) {
  .v-btn__content {
    white-space: normal;
  }
}
</style>

<style lang="scss" scoped>
.craft {
  color: var(--color-craft);
}

.loot {
  color: var(--color-loot);
}

.default {
  color: var(--color-indigo);
}
</style>
