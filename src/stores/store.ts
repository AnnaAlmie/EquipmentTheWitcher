import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ua, en } from "@/utils/language";
import { schoolGears, stonesTable } from "@/utils/table";
import type { TSchoolTable, TGears, TGrade, TStatus } from "@/utils/types";

export const useLanguageStore = defineStore("language", () => {
  const status = ref<boolean>(true);
  const lang = ref(ua);

  function $changeStatus() {
    status.value = !status.value;
    status.value ? (lang.value = ua) : (lang.value = en);
  }

  return { status, lang, $changeStatus };
});

export const useSchoolGearStore = defineStore("schoolGear", () => {
  const gearStatuses = useStorage("schoolGearStatus", schoolGears);

  function $changeGearStatus(gearId: string, status: TStatus) {
    const allTiers: TGrade[] = gearStatuses.value?.flatMap(
      (school: TSchoolTable) =>
        school.gear?.flatMap((slot: TGears) => slot.grade),
    );

    const tier = allTiers.find((t) => t.id === gearId);

    if (tier) {
      tier.status = status;
    }
  }

  return {
    gearStatuses,
    $changeGearStatus,
  };
});

export const useStonesStore = defineStore("stones", () => {
  const tableCells = useStorage("stonesСellStatus", stonesTable);
  const idCell = ref<number>(0);
  const indexCell = ref<number>(0);

  function $changeCellStatus(status: string) {
    let selectedCell = tableCells.value.find((item) => {
      return item.id === idCell.value;
    });

    if (selectedCell) {
      selectedCell.cells[indexCell.value] = status;
    }
  }

  return { tableCells, idCell, indexCell, $changeCellStatus };
});
