<template>
    <!--Carousel-->
    <div class="mobile-slide">
      <q-carousel class="home-carousel" animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide :name="1" img-src="../assets/img/IMG_6279.png">
          <div class="absolute-center custom-caption text-center text-white">
            <div class="text-h4 carousel-text">Lead Pastor</div>
            <div class="text-subtitle1 carousel-text">The Reverend Dr. Murphy Akpovi (PhD)</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../assets/img/IMG_6315.png">
          <div class="absolute-center custom-caption text-center text-white carousel-text">
            <div class="text-h4 carousel-text">Associate Pastor</div>
            <div class="text-subtitle1 carousel-text">Pastor Jewel Tessy Akpovi</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!--Desktop Replacement For Carousel-->
    <div class="desktop-slide">
      <q-carousel class="home-carousel" animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide :name="1" img-src="../assets/img/IMG_6279.png">
          <div class="absolute-center custom-caption text-center text-white">
            <div class="text-h4 carousel-text">Lead Pastor</div>
            <div class="text-subtitle1 carousel-text">The Reverend Dr. Murphy Akpovi (PhD)</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../assets/img/IMG_6315.png">
          <div class="absolute-center custom-caption text-center text-white carousel-text">
            <div class="text-h4 carousel-text">Associate Pastor</div>
            <div class="text-subtitle1 carousel-text">Pastor Jewel Tessy Akpovi</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!--Service Days-->
    <div class="row">
      <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center text-h4 text-uppercase q-py-lg q-my-lg text-weight-bolder headers">Explore Our Service Days</div>
      <div v-for="service in services" :key="service.type" class="q-px-md q-py-md col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
        <q-card class="my-card">
          <q-img :src="service.img" class="card-img"/>

          <q-card-section>
            <a :href="map" target="_blank"><q-btn fab color="warning" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%);"/></a>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{service.type}}
              </div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">On-site Directions</div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              Join Us Online or On-site
            </div>
            <div class="text-caption text-red text-weight-bold">
              {{service.time}}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round><img src="../assets/icons/keyicon.png" width="48" height="48"></q-btn>
            <a :href="fblink" target="_blank" class="fb"><q-btn flat color="primary">Join Facebook Live</q-btn></a>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!--Ministry Cards-->
    <div class="row">
      <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center text-h4 text-uppercase q-py-lg q-my-lg text-weight-bolder headers">Key Ministries</div>
      <div v-for="ministry in ministries" :key="ministry.ministry_name" class="q-px-md q-py-md col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12">
        <div class="ministry-card">
	      	<img :src="ministry.ministry_logo" :alt="ministry.ministry_name" class="ministry-card-img">
          <a class="ministry-page" :href="ministry.ministry_page" target="_blank">VISIT PAGE</a>
          <p class="ministry-phrase">{{ministry.ministry_name}}</p>
            <p class="ministry-caption">{{ministry.caption}}</p>
          <div class="ministry-card-div"></div>
          <div class="ministry-interact">
            <a href=""><img src="../assets/img/logo.png" class="ministry-superior"></a>
            <a href="https://wa.me/+2348098912544" target="_blank"><img src="../assets/icons/chat.png" class="ministry-inquire"></a>
          </div>
	      </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      slide: ref(1),
      stars: 5,
      fblink: "",
      map: "https://www.google.com/search?q=kingdom+envoy&rlz=1C1CHWL_enNG976NG976&oq=king&aqs=chrome.1.69i57j35i39j46i512j0i433i512l2j0i512j69i60l2.3976j0j7&sourceid=chrome&ie=UTF-8#",
      services: [
        {
          "type": "Empowerment Service",
          "img": "./assets/img/empowerment.jpg",
          "time": "9:00 AM GMT+1"
        },
        {
          "type": "Celebration Service",
          "img": "./assets/img/celebrate.jpg",
          "time": "5:00 PM GMT+1"
        },
        {
          "type": "Gratitude Service",
          "img": "./assets/img/gratitude.jpg",
          "time": "9:00 AM GMT+1"
        }
      ],
      ministries: [
        {
          "ministry_name": "Mended",
          "ministry_logo": "../assets/img/mended.png",
          "ministry_page": "https://facebook.com",
          "caption": "Mended is an active ministry under Kingdom Envoy Church, under the Murphy Akpovi Ministry, to build Men who are God fearing and versatile."
        },
        {
          "ministry_name": "God's Leading Ladies",
          "ministry_logo": "../assets/img/gll.png",
          "ministry_page": "https://facebook.com",
          "caption": "God’s Leading Ladies is an active ministry under Kingdom Envoy Church, under the Murphy Akpovi Ministry, to raise women with virtuous characters."
        },
        {
          "ministry_name": "Cream Singles",
          "ministry_logo": "../assets/img/creamsingles.png",
          "ministry_page": "https://facebook.com",
          "caption": "Cream Singles offers every youth the opportunity to experience life as a youth as God wills it."
        },
        {
          "ministry_name": "School of Ministry",
          "ministry_logo": "../assets/img/logo.png",
          "ministry_page": "https://wa.me/+2348098912544",
          "caption": "The school of ministry is open to everyone with the desire to serve God in the capacity of a Pastor and beleive there is a purpose set out for them in the regards."
        },
      ]
    };
  },
  mounted () {

    //facebook live stream link fecthed from backend
    const fblink = fetch('http://localhost:1337/facebook-live')
      .then(response => response.json())
      .then(data => {
        this.fblink = data.Link;
      })
      .catch(err => console.log(err.message));
  }
});
</script>

<style>
a {
  text-decoration: none;
}
</style>
