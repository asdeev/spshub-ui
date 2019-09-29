
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
          <v-flex >
            <br>
            <h2 class="display-3 font-weight-light" style="color:green">Join Us:</h2>
          </v-flex>
          <v-flex offset-md1 class="spacing-top">
            <h2>
          <p>
          <a href ="https://docs.google.com/forms/d/e/1FAIpQLSd3vE6_d8QhskuTtvRM2Dt5ZmH4rUUhMV9iNZQWuVKL2JGZXQ/viewform">Became a Mentee/Mentor</a>
          </p>
          <p></p>
          <p>
            <a href ="https://docs.google.com/forms/d/e/1FAIpQLSdIuFJY8PVekGp9r0DPNnLD_eSXiq3iyEBaLW4Io7C1yn_rKA/viewform">Become a Mentor</a> 
          </p>
             
            </h2>
          </v-flex>
        </v-layout>
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
