<template>
  <!-- vue:test -->
  <v-app>
    <AppHeader :header="header"></AppHeader>
    <AppNavigation :navigation="navigation"></AppNavigation>
    <v-container fluid>
      <v-layout>
        <v-flex><router-view></router-view></v-flex>
      </v-layout>
    </v-container>
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
