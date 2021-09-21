<template>
  <header>
    <!-- Navbar -->
    <MDBNavbar expand="lg" light bg="white" container>
      <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
      <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
        <MDBNavbarItem :to="{ name: 'About' }">
          Know Us
        </MDBNavbarItem>
        <MDBNavbarItem :to="{ name: 'Services' }">
          Services
        </MDBNavbarItem>
        <MDBNavbarItem :to="{ name: 'Blog' }">
          Blog
        </MDBNavbarItem>
        <MDBNavbarItem :to="{ name: 'Contact' }">
          Prayers & Testimonies
        </MDBNavbarItem>
        <MDBNavbarItem :to="{ name: 'Live' }">
          Live Stream
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBNavbar>
    <!-- Navbar -->
  </header>
  <router-view/>
</template>

<script>
  import { MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem
    },
  };
</script>

<style>
  #app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
