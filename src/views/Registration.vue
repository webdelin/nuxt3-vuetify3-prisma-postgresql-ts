<script lang="ts" setup>
import {ref} from "vue";

const first = ref(null);
const last = ref(null);
const email = ref(null);
const password = ref(null);
const terms = ref(false);
</script>
<template>
  <div class="py-4">
    <v-card class="mx-auto" max-width="344" title="User Registration">
      <v-container>
        <v-text-field
          v-model="first"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="last"
          color="primary"
          label="Last name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>

        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success">
          Complete Registration

          <v-icon end icon="mdi-chevron-right"></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
