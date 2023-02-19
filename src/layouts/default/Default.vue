<template>
  <v-app :theme="theme">
    <v-main>
    <default-bar />

    <default-view />
    <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      >Toggle Theme</v-btn>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import { ref } from 'vue';
const theme = ref('light');

  function onClick (): void {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>
