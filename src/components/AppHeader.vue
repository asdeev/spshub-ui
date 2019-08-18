<template>
  <!-- vue:test -->
  <v-card flat tile>
    <v-card-title class="primary1">
      <div class="app-header__title display-1 font-italic white--text">
        {{ header.title }}
      </div>
      <v-spacer></v-spacer>
      <v-btn
        class="app-header__contact-button"
        color="info1 white--text"
        @click="sendEmail(emailAddress)"
        >{{ header.button1 }}&nbsp<i class="far fa-paper-plane"></i
      ></v-btn>
      <v-btn
        class="app-header__join-button"
        color="info2 white--text"
        @click="goToForm('https://forms.gle/Lsm1tvrmnBQSpuv9A')"
        >{{ header.button2 }}&nbsp<i class="fas fa-chevron-right"></i
      ></v-btn>
      <v-btn
        class="app-header__become-mentor-button"
        color="info2 white--text"
        @click="goToForm('https://forms.gle/tJoSZKvbfGLrsX7V8')"
        >{{ header.button3 }}&nbsp<i class="fas fa-chevron-right"></i
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
  },
  data: () => ({
    emailAddress: 'spshub.mentorship@gmail.com'
  }),
  methods: {
    goToForm(url) {
      window.location.href = url;
    },
    sendEmail(emailAddress) {
      window.location.href = `mailto:${emailAddress}?subject=I%20would%20like%20to%20know%20more%20about%20SPSHub!&body=`;
    }
  }
};
</script>
