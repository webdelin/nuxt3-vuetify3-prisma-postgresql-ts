<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" @click="clicFunc()"/>
      Essentials Preset {{ testConst }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const testConst = ref(false)
function clicFunc(){
  testConst.value = !testConst.value
}
</script>
