<template>
  <!-- vue:test -->

  <v-container>
    <v-layout justify-center align-center> </v-layout>
    <v-layout row wrap justify-space-between>
      <v-flex md8>
        <v-layout column wrap justify-space-between>
          <v-flex>
            <h2 class="display-3 font-weight-light">Vision</h2>
            <h4 class="display-1 font-italic">
              Connected, Inspired, and Empowered Somali Community
            </h4>
          </v-flex>
          <v-flex offset-md2 class="spacing-top">
            <h2 class="display-3 font-weight-light">Mission</h2>
            <h4 class="display-1 font-weight-light font-italic">
              Create and cultivate a symbiotic environment that maximizes the
              potentials of Somali students and professionals through mentorship
              and networking
            </h4>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md4>
        <v-img
          src="/assets/images/proverb.png"
          max-height="600"
          max-width="600"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MissionAndVisionRoute'
};
</script>
