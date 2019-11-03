<template>
  <!-- vue:test -->
  <div>
    <EventCard :events="events"></EventCard>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'
export default {
  name: 'EventsRoute',
  components: {
    EventCard
  },
  data() {
    return {
      //events object --redandant info
      events:  [
        {
          "id": 0,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Location Place holder",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
          {
          "id": 1,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Location Place holder",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
          {
          "id": 2,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Location Place holder",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
          {
          "id": 3,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Location Place holder",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
          {
          "id": 4,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Location Place holder",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
          {
          "id": 5,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Location Place holder",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
          {
          "id": 6,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Location Place holder",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
          {
          "id": 7,
          "category": "Event catagory place holder",
          "organizer": "Organizer name place holder",
          "title": "Event Title",
          "description": "Event discription",
          "location": "Event Location",
          "date": "2019-01-31T22:09:00.000Z",
          "time": "7:00",
        },
      ]
    }
  }
};
</script>
