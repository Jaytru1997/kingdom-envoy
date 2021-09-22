<template>
    <header id="navbar" class="d-flex flex-row mx-lg-5 mb-3 sticky-top">
      <div class="ms-lg-5 w-25">
        <router-link :to="{ name: 'Home' }">
        <img src="./assets/images/logo.png" height="75" alt="key logo">
        </router-link>
      </div>
      <div class="navbar ms-lg-5 ms-md-4">
        <div class="p-2 ms-lg-5"><router-link :to="{ name: 'About' }">KNOW US</router-link></div>
        <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Services' }">SERVICES</router-link></div>
        <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Blog' }">BLOG</router-link></div>
        <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Contact' }">PRAYERS & TESTIMONIES</router-link></div>
        <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Live' }">LIVE STREAM</router-link></div>
      </div>
      <div class="sidebar" id="sidebar">
        <a id="icon" href="JavaScript:void(0)">
        <div  id="icon1" class="nav l"></div>
        <div id="icon2" class="nav2 l"></div>
        <div id="icon3" class="nav3 l"></div>
        </a>   
      </div>
    </header>
    <!--Header Ends-->
    
    <!--DropDown SideBar Menu-->
    <div class="hidden-nav" id="collapsed">
        <div class="navbar ms-lg-5 ms-md-4 d-flex flex-column">
          <div class="p-2 ms-lg-5"><router-link :to="{ name: 'About' }">KNOW US</router-link></div>
          <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Services' }">SERVICES</router-link></div>
          <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Blog' }">BLOG</router-link></div>
          <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Contact' }">PRAYERS & TESTIMONIES</router-link></div>
        <div class="p-2 ms-lg-5"><router-link :to="{ name: 'Live' }">LIVE STREAM</router-link></div>
        </div>
    </div>
    <!--DropDown SideBar Menu Ends-->

  <router-view/>

  <!--Footer-->
  <MDBFooter :text="['center', 'lg-start']" class="mx-lg-5">
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">
      <form action="">
        <!--Grid row-->
        <MDBRow>
          <!--Grid column-->
          <MDBCol auto class="mb-4 mb-md-0 col-lg-4">
            <p class="pt-2"><strong>Sign up for our newsletter</strong></p>
          </MDBCol>
          <!--Grid column-->

          <!--Grid column-->
          <MDBCol md="5" lg="5" col="12" class="mb-4 mb-md-0 col-lg-5">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form5Example2" class="form-control" v-model="email"/>
              <label class="form-label" for="form5Example2">Email address</label>
            </div>
          </MDBCol>
          <!--Grid column-->

          <!--Grid column-->
          <MDBCol auto class="mb-4 mb-md-0 col-lg-3">
            <!-- Submit button -->
            <MDBBtn color="primary" type="submit" class="mb-4">
              Subscribe
            </MDBBtn>
          </MDBCol>
          <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
      </form>
    </MDBContainer>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{ copydate }} Copyright:
      <a class="text-dark" href="#">{{ churchName }}</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-vue-ui-kit';

  export default {
    data () {
      return {
        email: '',
        churchName: 'Kingdom Envoy',
        copydate: new Date().getFullYear()
      }
    },
    components: { 
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBBtn
    },
    mounted() {
       const dropSideBar = () => {
        const icon1 = document.getElementById("icon1");
        (icon1.className === "nav l")
        ?
        icon1.className = "l1 l"
        :
        icon1.className = "nav l";

        const icon2 = document.getElementById("icon2");
        (icon2.className === "nav2 l")
        ?
        icon2.className = "l2 l"
        :
        icon2.className = "nav2 l";

        const icon3 = document.getElementById("icon3");
        (icon3.className === "nav3 l")
        ?
        icon3.className = "l3 l"
        :
        icon3.className = "nav3 l";

        const sBar = document.getElementById("collapsed");
        (sBar.className === "hidden-nav")
        ?
        sBar.className = "dropdown-content"
        :
        sBar.className = "hidden-nav";
    }
    document.getElementById("icon").addEventListener("click", dropSideBar);
    }
  };
</script>

<style>
  #app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
