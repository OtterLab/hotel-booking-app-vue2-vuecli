<template>
  <div class="create-room">
    <v-container>
      <v-card>
        <v-card-title class="v-card-h2-title">Create Rooms</v-card-title>

        <!---- Alert message ---->
        

        <v-form ref="form" v-model="valid" method="POST" @submit.prevent="createRoom" lazy-validation>
          <div class="form-group">
            <v-text-field dense label="Room Name" outlined color="blue darken-1" prepend-inner-icon="mdi-room-service pr-2"
            ></v-text-field>
          </div>
          
          <div class="form-group">
            <v-select dense :items="roomTypeItems" label="Room Type" outlined color="blue darken-1" prepend-inner-icon="mdi-bed pr-2"
            ></v-select>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Ratings" outlined color="blue darken-1" prepend-inner-icon="mdi-star pr-2"
            ></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Price" outlined color="blue darken-1" prepend-inner-icon="mdi-currency-usd pr-2"
            ></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Description" outlined color="blue darken-1" prepend-inner-icon="mdi-information pr-2"
            ></v-text-field>
          </div>
          <div class="form-group">
            <v-btn dense class="mt-0 mb-3 create-btn-gradient white--text" type="submit" @click="validate">Create Room</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.v-card-h2-title {
  font-size: 15pt;
}

.create-btn-gradient {
  background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
  width: 100%;
}

.form-group {
    margin-left: 15px;
    margin-right: 15px;
}
</style>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      roomFD: {
        roomName: '',
        roomNameRules: [
          v => !!v || 'Room Name is required'
        ],

        roomType: null,

        roomRatings: '',
        roomRatingsRules: [
          v => !!v || 'Room Ratings is required'
        ],

        roomPrice: '',
        roomPriceRules: [
          v => !!v || 'Room Price is required'
        ],

        roomDescription: '',
        roomDescriptionRules: [
          v => !!v || 'Room Description is required'
        ]
      },
      roomTypeItems: ['Queen Bedroom Ocean Silk'],

      alertToggle: 'none',
      valid: true
    }
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    createRoom() {
      const roomFD = new FormData();
      roomFD.append(this.roomFD.roomName);
      roomFD.append(this.roomFD.roomType);
      roomFD.append(this.roomFD.roomRatings);
      roomFD.append(this.roomFD.roomPrice);
      roomFD.append(this.roomFD.roomDescription);

      axios.post('http://localhost:8000/api/room/createRoom', roomFD)
      .then((response) => {
        console.log(response);
        this.alertToggle = 'success';

        setTimeout(() => {
          this.alertToggle = 'none';
          this.$router.push({name: 'my-rooms'});
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        this.alertToggle = 'error';
      });
    }
  }
}
</script>