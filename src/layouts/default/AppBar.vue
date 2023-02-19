<template>
  <v-toolbar>
    <v-app-bar-nav-icon @click="drawerChange()">
      <v-icon :icon="drawer ? 'mdi-menu-open' : 'mdi-menu'"></v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon @click="themeChange">
      <v-icon
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      ></v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts" setup>
import {useAppStore} from "@/store/app";
import {storeToRefs} from "pinia";

const appStore = useAppStore();
const {drawer, theme} = storeToRefs(appStore);

function drawerChange(): void {
  drawer.value = !drawer.value;
}

function themeChange(): void {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
