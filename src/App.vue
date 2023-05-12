<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheBackground from '@/components/TheBackground.vue';
import TheNavigation from '@/components/Navigation/TheNavigation.vue';

</script>

<template>
  <v-app>
    <TheBackground />
    <TheNavigation />

    <RouterView />
  </v-app>
</template>