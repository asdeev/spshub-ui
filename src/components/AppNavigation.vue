<template>
  <!-- vue:test -->
  AppNavigation
</template>

<script>
export default {
  name: 'AppNavigation',
  props: {
    pages: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>
