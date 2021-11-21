<template>
    <q-layout view="hHh lpR fff" height-hint="98" class="shadow-2 rounded-borders">
      <!--Header-->
      <q-header elevated class="container">
        <q-toolbar class="bg-dark text-white">
          <q-avatar>
            <img src="../assets/img/logo.png">
          </q-avatar>

          <q-toolbar-title class="menu-tabs mobile-hide">
            <q-tabs>
              <q-route-tab to="/" label="Home" exact />
              <q-route-tab to="/about" label="Know us" exact />
              <q-route-tab to="/blogs" label="Blog" exact />
              <q-route-tab to="/gallery" label="Gallery" exact />
              <q-route-tab to="/contact" label="Prayers & Testimonies" exact />
              <q-route-tab to="/live" label="Live Stream" exact />
            </q-tabs>
          </q-toolbar-title>
          <q-btn flat round dense icon="menu" class="q-mr-sm menu-icon" @click="openMenu"/>
        </q-toolbar>
      </q-header>
      
      <!--Navigation Bar-->
      <div class="navpage col-sm-12 col-xs-12">
        <div class="closebtn" @click="closeNav">&times;</div>
        <div class="navpage-content">
          <router-link to="/">Home</router-link>
          <router-link to="/about">Know Us</router-link>
          <router-link to="/blogs">Blog</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/contact">Prayers & Testimonies</router-link>
          <router-link to="/live">Live Stream</router-link>
        </div>
      </div>

      <q-page-container>
        <q-page>
          <router-view />
        </q-page>
      </q-page-container>

      <!--Footer-->
      <div class="bg-dark q-py-lg text-white">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-sm-12 col-md-4 col-xs-12 q-px-sm footer-address">
            <h5 class="q-my-none text-weight-bolder text-uppercase">{{ orgName }}</h5>
            <p class="text-grey-6 text-italic">{{ address }}</p>
          </div>

      <!--Email Newsletter-->
          <div class="col-xl-4 col-lg-4 col-sm-12 col-md-4 col-xs-12 q-px-sm">
            <q-input dark rounded filled bottom-slots v-model="text" label="Subscribe to our newsletter" counter maxlength="30">
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
          <div class="col-xl-4 col-lg-4 col-sm-12 col-md-4 col-xs-12 text-center q-my-md text-grey-6">
            Copyright &copy; {{copyright}} {{orgName}}.
          </div>
        </div>
      </div>
    </q-layout>
</template>

<script>

export default {
  data() {
    return {
      orgName: "Kingdom Envoy",
      copyright: new Date().getFullYear(),
      text: "someone@example.com",
      address: "The Spirit Center, Jesus Street, Off Street Opp. Sokaje Hotel, Ekredjebor, Ughelli, Delta State, Nigeria, 333105"
    }
  },
  methods: {
    openMenu() {
      const menu = document.querySelector('.navpage');
      menu.style.height = "100%";
    },
    closeNav() {
      const menu = document.querySelector('.navpage');
      menu.style.height = "0%";
    }
  }
}
</script>