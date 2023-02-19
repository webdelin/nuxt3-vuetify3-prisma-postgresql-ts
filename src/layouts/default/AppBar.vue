<template>
    <v-toolbar>
      <v-app-bar-nav-icon  @click="clickFunc()"/>

      <v-toolbar-title>Title - {{testConst}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const testConst = ref(false)
function clickFunc(): void{
  testConst.value = !testConst.value
}
</script>
