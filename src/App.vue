<template>
  <!-- vue:test -->
  <v-app>
    <AppNavigation :navigation="navigation"></AppNavigation>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppNavigation from '~/components/AppNavigation';
export default {
  components: {
    AppNavigation
  },
  computed: {
    ...mapState({
      navigation: 'navigation'
    })
  },
  name: 'App'
};
</script>
