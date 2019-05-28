<template>
  <!-- vue:test -->
  <v-footer height="auto" inset>
    <v-card class="flex" flat tile>
      <v-card-title class="app-footer__social-media primary2">
        <strong class="app-footer__subheading subheading white--text">{{
          footer.subheading
        }}</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in footer.links"
          :key="item.id"
          :href="item.link"
          target="_blank"
          class="app-footer__links mx-3"
          dark
          icon
        >
          <v-icon size="24">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions
        class="app-footer__copyright secondary white--text justify-end"
      >
        {{ footer.name }} {{ new Date().getFullYear() }}
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    footer: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>
