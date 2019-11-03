<template>
    <v-container>
        <v-content>
            <v-layout row wrap>
                    <v-flex xs12 md6 lg6
                        v-for="event in events"
                        :key="event.id"
                    >
                        <router-link class ="event-link" :to="{name: 'EventDetailsRoute', params: {event:event}}"> 
                            <v-card hover class=" event-card  ma-2 ">
                                <v-card-text>
                                    <v-card-title class="display-1">
                                        {{event.title}}
                                    </v-card-title>
                                    <span class="eyebrow">
                                    <strong>   
                                        @ {{event.date}} on {{event.time}}
                                    </strong>
                                    </span>
                                </v-card-text>
                                <BaseIcon name="users" height="24" weight = "64"> {{event.attendees ? event.attendees.length : 0 }} Attending</BaseIcon>
                            </v-card>
                        </router-link>
                    </v-flex>
            </v-layout>
        </v-content>
    </v-container>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
export default {
    name: 'EventCard',
    props: {
        events: Array,
        required: true,
        default: {}
    }, 
    components: {
        BaseIcon
    }

}
</script>

<style scoped>

    .event-card {
      padding: 20px;
      margin-bottom: 24px;
      transition: all 0.2s linear;
      cursor: pointer;
      border-radius: 25px;
    }
    .event-card:hover {
      transform: scale(1.02);
      box-shadow: 0 3px 12px 0 rgba(0, 160, 35, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
      
    }
    .event-card > .title {
      margin: 0;
    }
    
    .event-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }

</style>