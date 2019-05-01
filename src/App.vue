<template>
  <!-- vue:test -->
  <v-app>
    <AppNavigation :pages="pages"></AppNavigation>
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
    return {
      pages: []
    };
  },
  name: 'App'
};
</script>
