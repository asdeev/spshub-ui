<template>
  <!-- vue:test -->
  <v-toolbar class="app-navigation__toolbar">
    <v-toolbar-side-icon class="app-navigation__icon">+</v-toolbar-side-icon>
    <v-toolbar-items class="app-navigation__pages">
      <v-btn
        v-for="item in navigation.pages"
        flat
        :to="item.page"
        :key="item.id"
      >
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppNavigation',
  props: {
    navigation: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>
