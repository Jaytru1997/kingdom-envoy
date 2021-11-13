<template>
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <!--Carousel-->
    <div class="">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="../assets/img/IMG_6279.png">
          <div class="absolute-center custom-caption text-center text-white">
            <div class="text-h4">Lead Pastor</div>
            <div class="text-subtitle1">The Reverend Dr. Murphy Akpovi</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../assets/img/online.jpg" />
        <q-carousel-slide :name="3" img-src="../assets/img/IMG_6315.png" />
        <q-carousel-slide :name="4" img-src="../assets/img/online.jpg" />
      </q-carousel>
    </div>
    
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      slide: ref(1)
    }
  }
})
</script>
