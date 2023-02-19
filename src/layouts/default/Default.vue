<template>
  <v-app :theme="appStore.theme">
    <v-main>
      <default-bar/>
      <default-view/>
    </v-main>
    <app-drawer/>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import AppDrawer from "@/layouts/default/AppDrawer.vue";
import {useAppStore} from "@/store/app";
import {useDisplay} from "vuetify";
import {onMounted, watch} from "vue";

const appStore = useAppStore();
const {width, mobile} = useDisplay();

onMounted(() => {
  console.log(width.value); // 960
  console.log(mobile.value); // true
});

watch(width, (width, oldWidth) => {
  console.log(`watch: ${oldWidth} -> ${width}`);
});

/*watch(
  () => width,
  (width, prevWidth) => console.log(`watch: ${prevWidth} -> ${width}`)
);*/
</script>
