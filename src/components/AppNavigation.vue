<template>
  <!-- vue:test -->
  AppNavigation
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
