<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-dark text-white">
      <q-avatar>
        <img src="../assets/img/logo.png">
      </q-avatar>

      <q-toolbar-title class="menu-tabs">
        <q-tabs v-model="tab">
          <q-tab name="about" label="Know us" />
          <q-tab name="service" label="Services" />
          <q-tab name="blog" label="Blog" />
          <q-tab name="contact" label="Prayers & Testimonies" />
          <q-tab name="live" label="Live Stream" />
        </q-tabs>
      </q-toolbar-title>
      <q-btn flat round dense icon="menu" class="q-mr-sm menu-icon" />
      <!-- <q-btn flat round dense icon="whatshot" /> -->
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('')
    }
  }
}
</script>