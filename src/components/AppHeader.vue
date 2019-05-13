<template>
  <!-- vue:test -->
  <v-card flat tile>
    <v-card-title class="primary1">
      <div class="app-header__title title white--text">{{ header.title }}</div>
      <v-spacer></v-spacer>
      <v-btn
        class="app-header__contact-button"
        color="info1 white--text"
        :to="header.button1Link"
        >{{ header.button1 }}&nbsp<i class="far fa-paper-plane"></i
      ></v-btn>
      <v-btn
        class="app-header__join-button"
        color="info2 white--text"
        :to="header.button2Link"
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
