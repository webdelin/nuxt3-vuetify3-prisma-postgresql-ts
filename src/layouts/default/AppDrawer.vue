<template>
  <v-navigation-drawer v-model="appStore.drawer">
    <!--  -->
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store/app";
const appStore = useAppStore()
</script>
