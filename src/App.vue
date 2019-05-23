<template>
  <!-- vue:test -->
  <v-app>
    <AppHeader :header="header"></AppHeader>
    <AppNavigation :navigation="navigation"></AppNavigation>
    <router-view></router-view>
    <AppFooter :footer="footer"></AppFooter>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppHeader from '~/components/AppHeader';
import AppNavigation from '~/components/AppNavigation';
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    AppHeader,
    AppNavigation,
    AppFooter
  },
  computed: {
    ...mapState({
      header: 'header',
      navigation: 'navigation',
      footer: 'footer'
    })
  },
  name: 'App'
};
</script>
