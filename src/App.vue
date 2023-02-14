<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheBackground from './components/TheBackground.vue';
import ThePlayer from './components/ThePlayer.vue';

</script>

<template>
  <v-app>
    <TheBackground />
    <ThePlayer />

    <RouterView />
  </v-app>
</template>

<style scoped>

</style>

<!-- 
<script setup lang="ts">

</script>

<template>
    
</template>

<style lang="scss" scoped>
    
</style> 
-->