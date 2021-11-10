<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated class="">
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
        </q-toolbar>
      </q-header>



      <!--Footer-->

      <q-footer reveal elevated class="bg-dark q-py-lg text-white">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-sm-12 col-xs-12 text-center">
            <q-toolbar>
              <q-toolbar-title>KINGDOM ENVOY</q-toolbar-title>
            </q-toolbar>
          </div>

      <!--Email Newsletter-->
          <div class="col-xl-4 col-lg-4 col-sm-12 col-xs-12 q-px-sm">
            <q-input dark rounded filled bottom-slots v-model="text" label="Subscribe to our newsletter" counter maxlength="30" :dense="dense">
              <template v-slot:before>
                <q-avatar>
                  <img src="../assets/img/logo.png">
                </q-avatar>
              </template>

              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer text-white" />
                <q-icon name="email"/>
              </template> 

              <template v-slot:after>
                <q-btn round dense flat icon="send"/>
              </template>
            </q-input>
          </div>
          <div class="col-xl-4 col-lg-4 col-sm-12 col-xs-12 text-center q-my-md text-grey-6">
            Copyright &copy; {{copyright}} {{orgName}}.
          </div>
        </div>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      orgName: "Kingdom Envoy",
      copyright: new Date().getFullYear(),
      text: "someone@example.com"
    }
  }
}
</script>