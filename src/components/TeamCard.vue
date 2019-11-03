<template>
<div>
    <v-container class="mt-5">
        <v-layout  row wrap>
            <v-flex xs12 md4 lg3 
                v-for="person in team"
                :key="person.name"> 
                <v-card class="member-card text-xs-center ma-2">
                    <v-responsive class="pt-4">
                        <v-avatar>
                            <img :src="person.profilePic" alt="">
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">
                            <strong>
                                {{person.name}}        
                            </strong>        
                        </div>
                        <div class="grey--text">
                            Role: TBD
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="grey"
                               @click="sendEmail(person.email)"
                        >
                            <BaseIcon name="mail" height="24" weight = "64">
                            <span>message</span>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn flat color="grey"
                               
                        >
                            <BaseIcon name="message-square" height="24" weight = "64">
                                <router-link class ="member-link" :to="{name: 'MemberProfileRoute'}">
                                    Profile
                                </router-link>
                        </v-btn>
                    </v-card-actions>
                </v-card>
                
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
export default {
    name: 'TeamCard',
    components: {
        BaseIcon
    },
    props: {
        team: Array,
        required: true,
        default: {}
    }, 
    methods: {
        sendEmail(emailAddress) {
        window.location.href = `mailto:${emailAddress}?subject=I%20would%20like%20to%20know%20more%20about%20SPSHub!&body=`;
        }
  }

}
</script>

<style scoped>

    .member-card {
      padding: 20px;
      margin-bottom: 24px;
      transition: all 0.2s linear;
      cursor: pointer;
      border-radius: 25px;
 
    }
    .member-card:hover {
      transform: scale(1.05);
      box-shadow: 0 3px 12px 0 rgba(0, 160, 35, 0.4), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    
 
    }
    .member-card > .title {
      margin: 0;
    }
    
    .member-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }

</style>