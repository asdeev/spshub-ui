<template>
  <!-- vue:test -->
  <v-card class="flex" flat tile>
    <v-card-title class="primary1">
      <div class="app-header__title title white--text">{{ header.title }}</div>
      <v-spacer></v-spacer>
      <v-btn class="app-header__contact-button" color="info1 white--text">{{
        header.button1
      }}</v-btn>
      <v-btn class="app-header__join-button" color="info2 white--text"
        >{{ header.button2 }}&nbsp<i class="fas fa-chevron-right"></i
      ></v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    header: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>
