<template>
  <v-container>
      <v-content class="mt-5">
          <v-layout
            justify-center
            align-center
          >
            <h2 display-2 class="indigo--text">
                Page  under Construction
            </h2>
          </v-layout>

      </v-content>
  </v-container>
</template>

<script>
export default {
    name: 'EventDetailsRoute',
    props: {
        event: Array,
        required: true,
        default: []
    }

}
</script>

<style>

</style>