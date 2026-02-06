<script setup lang="ts">
import { ref } from "vue";
import { useLanguageStore, useSchoolGearStore } from "@/stores/store";
import ThePopupChangeCell from "@/components/ThePopupChangeCell.vue";

const storeLang = useLanguageStore();
const storeGear = useSchoolGearStore();

const popup = ref<boolean>(false);
const idCell = ref<string>("");

const changeClass = (id?: string) => {
  idCell.value = id || "";
  popup.value = true;
};
</script>

<template>
  <section v-for="school in storeGear.gearStatuses" :key="school.id">
    <table data-table="gear">
      <thead>
        <tr>
          <th colspan="7">
            <h2 class="text-center">
              {{ storeLang.lang.schools[school.title] }}
            </h2>
          </th>
        </tr>
        <tr class="only-desktop">
          <th />
          <th />
          <th v-for="level of storeLang.lang.levels" v-text="level"></th>
        </tr>
      </thead>
      <tbody class="only-mobile">
        <tr
          v-for="(levels, indexLevels) in storeLang.lang.levels"
          :key="indexLevels"
        >
          <td>{{ levels }}</td>
          <template v-for="gear in school.gear" :key="gear.id_title">
            <template
              v-for="(grade, indexGrade) in gear.grade"
              :key="indexGrade"
            >
              <td
                v-if="
                  grade.id_title === indexLevels && grade.status !== 'noexist'
                "
                :class="['td-point cell_size', grade.status]"
                :data-cell="storeLang.lang.gears[gear.id_title]"
                @click="changeClass(grade.id)"
              >
                <small>lvl.</small>{{ grade.level }}
              </td>
            </template>
          </template>
        </tr>
      </tbody>

      <tbody class="only-desktop">
        <tr v-for="gear in school.gear" :key="gear.id_title">
          <td :data-cell="storeLang.lang.gears[gear.id_title]">img</td>
          <td>{{ storeLang.lang.gears[gear.id_title] }}</td>
          <template
            v-for="(levels, indexLevels) in storeLang.lang.levels"
            :key="indexLevels"
          >
            <template
              v-for="(grade, indexGrade) in gear.grade"
              :key="indexGrade"
            >
              <td
                v-if="grade.id_title === indexLevels"
                :class="['td-point cell_size', grade.status]"
                :data-cell="storeLang.lang.gears[gear.id_title]"
                @click="changeClass(grade.id)"
              >
                <template v-if="grade.status !== 'noexist'">
                  <small>lvl.</small>{{ grade.level }}
                </template>
              </td>
            </template>
          </template>
        </tr>
      </tbody>
    </table>
  </section>
  <ThePopupChangeCell v-if="popup" :id="idCell" @click="popup = false" />
</template>

<style lang="scss" scoped>
//mobile
@media screen and (max-width: 966px) {
  table[data-table] {
    width: 100%;

    td[data-cell] {
      display: grid;
      justify-content: center;
      justify-items: center;
      width: 100%;

      &:not(:nth-child(2)) {
        margin-top: 2px;
      }

      &::before {
        content: attr(data-cell);
      }
    }
  }
}

//desktop
@media screen and (min-width: 967px) {
  table {
    td,
    th {
      white-space: nowrap;
    }
  }

  .cell_size {
    min-width: 9.1em;
  }
}
</style>
