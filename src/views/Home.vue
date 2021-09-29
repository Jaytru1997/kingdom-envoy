<template>
  <!-- Introduction Section -->
  <div class="mx-lg-5 fluid header mb-3">
    <MDBContainer>
      <MDBRow>  
        <MDBCol col="6" md="6" sm="12">
          <img src="">
        </MDBCol>
        <MDBCol col="6" md="6" sm="12" class="auto-type"></MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
  <!-- Introduction Section Ends -->

  <!-- Service Days Section -->

  <!-- Service Days Section Ends -->
  
</template>

<script>
import { MDBContainer, MDBCol, MDBRow } from 'mdb-vue-ui-kit';
import { init } from 'ityped';

export default {
  name: 'Home',
  components: { 
    MDBContainer,
    MDBCol,
    MDBRow
  },
  mounted() {
    const autoType = document.querySelector('.auto-type')

    init(autoType, { showCursor: false, strings: ['HELLO! ON BEHALF OF THE ENTIRE ASSEMBLY, I WOULD LIKE TO WELCOME YOU TO KINGDOM ENVOY. MY PRIMARY ASSIGNMENT IS TO RAISE TRUE WORSHIPPERS, TRANSFORMING NATIONS. PASTOR MURPHY AKPOVI'] }) 
  }
};
</script>
