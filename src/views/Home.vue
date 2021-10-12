<template>
  <!-- Introduction Section -->
  <div class="mx-lg-5 fluid header mb-3">
    <MDBContainer>
      <MDBRow>  
        <MDBCol col="6" md="6" sm="12" class="welcome">
          <h1 class="text-center mb-3 welcome-text">WELCOME!</h1>
          <MDBCol col="12" md="12" sm="12" class="auto-type"></MDBCol>
        </MDBCol>
        <MDBCol col="6" md="6" sm="12">
          <img src="../assets/images/ptrial.png" class="welcome-image">
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
  <!-- Introduction Section Ends -->

  <!-- Service Days Section -->
  <Service />
  <!-- Service Days Section Ends -->
  
</template>

<script>
import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit'
import { init } from 'ityped'
import Service from '../components/Service.vue'

export default {
  name: 'Home',
  components: { 
    MDBContainer,
    MDBRow,
    MDBCol,
    Service
  },
  mounted() {
    const autoType = document.querySelector('.auto-type')

    init(autoType, { showCursor: false, strings: ['MY NAME IS PASTOR MURPHY AKPOVI, THE LEAD PASTOR OF THIS ASSEMBLY AND MY PRIMARY ASSIGNMENT IS TO RAISE TRUE WORSHIPPERS, TRANSFORMING NATIONS.'] }) 
  }
};
</script>
