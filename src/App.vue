<template>
  <!-- vue:test -->
  <v-app>
    <AppNavigation :navigation="navigation"></AppNavigation>
    <router-view></router-view>
    <AppFooter :footer="footer"></AppFooter>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppNavigation from '~/components/AppNavigation';
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    AppNavigation,
    AppFooter
  },
  computed: {
    ...mapState({
      navigation: 'navigation',
      footer: 'footer'
    })
  },
  name: 'App'
};
</script>
