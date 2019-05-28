<template>
  <!-- vue:test -->
  <v-carousel class="home-route__carousel" hide-controls height="48.5em">
    <v-carousel-item
      class="home-route__images"
      v-for="(item, index) in home.carousel"
      :key="item.id"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeRoute',
  computed: {
    ...mapState({
      home: 'home'
    })
  }
};
</script>
