
<template>
  <!-- vue:test -->
  <v-container>
    <v-layout justify-center align-center> </v-layout>
    <v-layout row wrap justify-space-between>
      <v-flex md8>
        <v-layout column wrap justify-space-between>
          <v-flex>
            <p class="display-2 font-weight-light">Somali Professionals & Students Hub </p>
            <h4 class="display-3 font-italic" style="color:navy">
              <br>
               Website Under Construction
            </h4>
          </v-flex>

          <v-flex offset-md1 class="spacing-top">
            <h2>
          <p>
            Please joint us for the first Anual Somali Professionals  & Students Conference
          <a href ="https://www.eventbrite.com/e/the-power-of-mentoring-and-networking-tickets-73090701255?fbclid=IwAR1XfV6jjOXOoVgAOXVWATpyktmCYO-CvpZaDk8BNQTRaqKAhafyaGo2cLs">
             click here to register for the event
            </a>
          </p>
          <p></p>

             
            </h2>
          </v-flex>
      </v-flex>
      <v-flex md4>
        <v-img
          src="/assets/images/flayer3.jpeg"
          max-height="600"
          max-width="600"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeRoute',
  computed: {
    ...mapState({
      home: 'home'
    })
  }
};
</script>
