<template>
  <!-- vue:test -->
  <v-toolbar class="app-navigation__toolbar">
    <v-toolbar-items class="app-navigation__pages">
      <template v-for="item in navigation.pages">
        <v-menu offset-y v-if="item.subpages" open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              class="app-navigation__sublinks-menu"
              flat
              :key="item.id"
            >
              {{ item.name }}
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
              v-for="(subitem, index) in item.subpages"
              :key="index"
              :to="subitem.page"
            >
              <v-list-tile-title class="app-navigation__sublinks">{{
                subitem.name | capitalize
              }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn
          v-else
          class="app-navigation__links"
          flat
          :to="item.page"
          :key="item.id"
        >
          {{ item.name }}
        </v-btn>
      </template>
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
  },
  filters: {
    capitalize: value => {
      if (!value) return '';
      return value
        .toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    }
  }
};
</script>
