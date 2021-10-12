<template>
	<div class="mx-lg-5 fluid mb-3">
    <MDBContainer>
      <h3 class="service-days-header mb-4 mt-4">SERVICE DAYS</h3>

      <MDBRow>
      	<!-- Empowerment Service -->
	      <MDBCol class="auto-service" sm="12" md="6" lg="4" xl="4">
	      	<div class="service-card">
	      		<img src="../assets/images/empowerment.jpg" alt="empowerment service image" class="service-card-img">
				<p class="service-time">9:00 AM GMT +1</p>
				<p class="service-type"><span class="dot"></span>Empowerment Service</p>
				<p class="service-phrase">Join Us Online or In-Venue</p>
				<img src="../assets/icons/keyicon.png" alt="host logo" class="service-host-logo">
				<div class="service-card-div"></div>
				<div class="service-interact">
					<a href=""><img src="../assets/icons/attend.png" class="service-attend"></a>
					<a href="https://wa.me/+2348098912544" target="_blank"><img src="../assets/icons/chat.png" class="service-inquire"></a>
				</div>
	      	</div>
	      </MDBCol>
	    <!-- Celebration Service -->
	      <MDBCol class="auto-service" sm="12" md="6" lg="4" xl="4">
	      	<div class="service-card">
	      		<img src="../assets/images/celebrate.jpg" alt="celebration service image" class="service-card-img">
				<p class="service-time">5:00 PM GMT +1</p>
				<p class="service-type"><span class="dot"></span>Celebration Service</p>
				<p class="service-phrase">Join Us Online or In-Venue</p>
				<img src="../assets/icons/keyicon.png" alt="host logo" class="service-host-logo">
				<div class="service-card-div"></div>
				<div class="service-interact">
					<a href=""><img src="../assets/icons/attend.png" class="service-attend"></a>
					<a href="https://wa.me/+2348098912544" target="_blank"><img src="../assets/icons/chat.png" class="service-inquire"></a>
				</div>
	      	</div>
	      </MDBCol>
	    <!-- Gratitude Service -->
	      <MDBCol class="auto-service" sm="12" md="6" lg="4" xl="4">
	      	<div class="service-card">
	      		<img src="../assets/images/gratitude.jpg" alt="gratitude service image" class="service-card-img">
				<p class="service-time">9:00 AM GMT +1</p>
				<p class="service-type"><span class="dot"></span>Gratitude Service</p>
				<p class="service-phrase">Join Us Online or In-Venue</p>
				<img src="../assets/icons/keyicon.png" alt="host logo" class="service-host-logo">
				<div class="service-card-div"></div>
				<div class="service-interact">
					<a href=""><img src="../assets/icons/attend.png" class="service-attend"></a>
					<a href="https://wa.me/+2348098912544" target="_blank"><img src="../assets/icons/chat.png" class="service-inquire"></a>
				</div>
	      	</div>
	      </MDBCol>
	  </MDBRow>
    </MDBContainer>
  </div>
</template>

<script>
import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';

export default {
	components: {
		MDBContainer,
		MDBRow,
		MDBCol
	},
	computed: {
		
	}
};
</script>