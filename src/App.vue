<template>
  <!-- vue:test -->
  <v-app>
    <AppNavigation></AppNavigation>
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppNavigation from '~/components/AppNavigation';
export default {
  components: {
    AppNavigation
  },
  data() {
    return {};
  },
  name: 'App'
};
</script>
