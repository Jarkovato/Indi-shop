<template>
  <splide :options="options">
    <splide-slide>
      <img class="slider__image" src="img/features/features-slide3.jpg">
    </splide-slide>
    <splide-slide>
      <img class="slider__image" src="img/features/features-slide.jpg">
    </splide-slide>
    <splide-slide>
      <img class="slider__image" src="img/features/features-slide2.jpg">
    </splide-slide>
     <splide-slide>
      <img class="slider__image" src="img/features/features-slide4.jpg">
    </splide-slide>
     <splide-slide>
      <img class="slider__image" src="img/features/features-slide5.jpg">
    </splide-slide>
  </splide>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  data() {
      return {
        options: {
          rewind : true,
          width  : 700,
          gap    : '1rem',
        },
      };
    },
  components: {
    Splide,
    SplideSlide,
  },
}
</script>