<template>
  <!-- vue:test -->

  <v-container>
    <h2 class="display-3">Meet our Team</h2>
    <v-layout align-center justify-center row wrap>
      <v-flex v-for="(item, index) in team">
        <v-card
          v-if="index % 2 === 0"
          class="spacing-top card-size"
          color="primary1"
          class="white--text"
        >
          <v-card-title primary-title>
            <v-layout align-center justify-center row>
              <v-flex md5>
                <v-img :src="item.profilePic" height="125px" contain></v-img>
              </v-flex>
              <v-flex class="field-spacing" md7>
                <div class="headline white--text">{{ item.name }}</div>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider light></v-divider>
          <v-card-actions class="secondary1 pa-3">
            <v-btn class="accent">Contact</v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          v-if="index % 2 !== 0"
          class="spacing-top card-size"
          color="primary2"
          class="white--text"
        >
          <v-card-title primary-title>
            <v-layout align-center justify-center row>
              <v-flex md5>
                <v-img :src="item.profilePic" height="125px" contain></v-img>
              </v-flex>
              <v-flex class="field-spacing" md7>
                <div class="headline white--text">{{ item.name }}</div>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider light></v-divider>
          <v-card-actions class="secondary2 pa-3 ">
            <v-btn class="accent" @click="sendEmail(item.emailAddress)"
              >Contact</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'TeamRoute',
  data: () => ({
    team: [
      {
        name: 'Nassir Kowdan',
        profilePic: '/assets/images/profile-placeholder.jpg',
        emailAddress: 'insert@domain.com'
      },
      {
        name: 'Yasin Hundubay',
        profilePic: '/assets/images/profile-placeholder.jpg',
        emailAddress: 'insert@domain.com'
      },
      {
        name: 'Hussen Mohamud',
        profilePic: '/assets/images/profile-placeholder.jpg',
        emailAddress: 'insert@domain.com'
      },
      {
        name: 'Abdulqadir Diriye',
        profilePic: '/assets/images/profile-placeholder.jpg',
        emailAddress: 'insert@domain.com'
      },
      {
        name: 'Hassan Bashir',
        profilePic: '/assets/images/profile-placeholder.jpg',
        emailAddress: 'insert@domain.com'
      }
    ]
  }),
  methods: {
    sendEmail(emailAddress) {
      window.location.href = `mailto:${emailAddress}?subject=I%20would%20like%20to%20know%20more%20about%20SPSHub!&body=`;
    }
  }
};
</script>
