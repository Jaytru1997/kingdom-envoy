<template>
  <q-layout
    view="hHh lpR fff"
    height-hint="98"
    class="shadow-2 rounded-borders entire-body"
  >
    <!--Header-->
    <div elevated class="container">
      <div class="bg-black text-white menu-div q-py-lg">
        <img src="../assets/img/logo.png" class="menu-logo" />

        <div class="menu-tab mobile-hide q-my-lg q-ml-xl text-center">
          <router-link to="/" class="q-mx-lg">Home</router-link>
          <router-link to="/about" class="q-mx-lg">Know Us</router-link>
          <router-link to="/blogs" class="q-mx-lg">Blog</router-link>
          <router-link to="/gallery" class="q-mx-lg">Gallery</router-link>
          <router-link to="/contact" class="q-mx-lg"
            >Prayers & Testimonies</router-link
          >
          <a href="https://live.keynigeria.org" class="q-mx-lg">Live Stream</a>
        </div>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm menu-icon"
          @click="openMenu"
        />
      </div>
    </div>

    <!--Navigation Bar-->
    <div class="navpage col-sm-12 col-xs-12">
      <div class="closebtn" @click="closeNav">&times;</div>
      <div class="navpage-content">
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/about">Know Us</router-link>
          <router-link to="/blogs">Blog</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/contact">Prayers & Testimonies</router-link> -->
        <a href="https://live.keynigeria.org">Live Stream</a>
      </div>
    </div>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>

    <!--Floating Action Button-->
    <q-fab
      v-model="fabRight"
      vertical-actions-align="right"
      color="warning"
      glossy
      icon="keyboard_arrow_up"
      direction="up"
      class="fixed-right float-action"
    >
      <q-fab-action
        label-position="left"
        color="primary"
        @click="buyInit"
        icon="shopping_cart"
        label="Messages"
      />
      <q-fab-action
        label-position="left"
        color="secondary"
        @click="giveInit"
        icon="credit_card"
        label="Give"
      />
    </q-fab>

    <!--Footer-->
    <div class="bg-dark q-py-lg text-white">
      <div class="row">
        <div
          class="col-xl-4 col-lg-4 col-sm-12 col-md-4 col-xs-12 q-px-sm footer-address"
        >
          <h5 class="q-my-none text-weight-bolder text-uppercase">
            {{ orgName }}
          </h5>
          <p class="text-grey-6 text-italic">{{ address }}</p>
        </div>

        <!--Email Newsletter-->
        <div class="col-xl-4 col-lg-4 col-sm-12 col-md-4 col-xs-12 q-px-sm">
          <q-input
            dark
            rounded
            filled
            bottom-slots
            v-model="text"
            label="Subscribe to our newsletter"
            counter
            maxlength="30"
          >
            <template v-slot:before>
              <q-avatar>
                <img src="../assets/img/logo.png" />
              </q-avatar>
            </template>

            <template v-slot:append>
              <q-icon
                v-if="text !== ''"
                name="close"
                @click="text = ''"
                class="cursor-pointer text-white"
              />
              <q-icon name="email" />
            </template>

            <template v-slot:after>
              <q-btn round dense flat icon="send" />
            </template>
          </q-input>
        </div>
        <div
          class="col-xl-4 col-lg-4 col-sm-12 col-md-4 col-xs-12 text-center q-my-md text-grey-6"
        >
          Copyright &copy; 2012 - {{ copyright }} {{ orgName }}.
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";

export default {
  data() {
    return {
      orgName: "Kingdom Envoy",
      copyright: new Date().getFullYear(),
      text: "someone@example.com",
      address:
        "The Spirit Center, Jesus Street, Off Street Opp. Sokaje Hotel, Ekredjebor, Ughelli, Delta State, Nigeria, 333105",
      give: false,
      buy: false,
      fabRight: false,
    };
  },
  created() {
    const $q = useQuasar();
  },
  methods: {
    openMenu() {
      const menu = document.querySelector(".navpage");
      menu.style.height = "100%";
    },
    closeNav() {
      const menu = document.querySelector(".navpage");
      menu.style.height = "0%";
    },
    giveInit() {
      console.log("clicked");
      this.give = true;
    },
    buyInit() {
      console.log("clicked");
      this.buy = true;
    },
  },
};
</script>

<style scoped>
.menu-div {
  display: flex;
  align-content: center;
}
.menu-logo {
  position: relative;
  margin-top: 15px;
  margin-left: 20px;
  width: 48px;
  height: 48px;
}
.menu-tab {
  margin-left: 20%;
}
.menu-tab > a {
  font-size: 24px;
  text-decoration: none;
  color: #ffffff;
  align-self: flex-end;
}

.menu-tab > a:hover {
  color: #f2c037;
}
</style>
