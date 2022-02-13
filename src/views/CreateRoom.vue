<template>
  <div class="create-room">
    <v-container>
      <v-card>
        <v-img src="../assets/images/resort_outdoor_chair.png" height="168"></v-img>
        <v-card-title class="pa-2 heading-content justify-center white--text">Create Rooms</v-card-title>
      </v-card>
      
      <v-card class="mt-4 mb-0 pa-4">
      <!---- Alert message ---->
      <v-alert dense type="success" class="alert-message" v-if="alertToggle == 'success'">Room successfully created</v-alert>
      <v-alert dense type="error" class="alert-message" v-if="alertToggle == 'error'">Please complete required fields</v-alert>

        <v-form ref="form" v-model="valid" method="POST" @submit.prevent="createRoom" lazy-validation>
          <div class="form-group">
            <v-text-field dense label="Room Name" outlined color="blue darken-1" prepend-inner-icon="mdi-room-service pr-2"
            v-model="roomFD.roomName" name="roomName" :rules="roomFD.roomNameRules" required></v-text-field>
          </div>
          
          <div class="form-group">
            <v-select dense :items="roomTypeItems" label="Room Type" outlined color="blue darken-1" prepend-inner-icon="mdi-bed pr-2"
            v-model="roomFD.roomType" name="roomType" :rules="[v => !!v || 'Room Type is required']" required></v-select>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Ratings" outlined color="blue darken-1" prepend-inner-icon="mdi-star pr-2"
            v-model="roomFD.roomRatings" name="roomRatings" :rules="roomFD.roomRatingsRules" required></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Price" outlined color="blue darken-1" prepend-inner-icon="mdi-currency-usd pr-2"
            v-model="roomFD.roomPrice" name="roomPrice" :rules="roomFD.roomPriceRules" required></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Description" outlined color="blue darken-1" prepend-inner-icon="mdi-information pr-2"
            v-model="roomFD.roomDescription" name="roomDescription" :rules="roomFD.roomDescriptionRules" required></v-text-field>
          </div>
          
          <div class="form-group">
            <v-btn dense class="mt-0 mb-0 create-btn-gradient white--text" type="submit" @click="validate">Create Room</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.heading-content {
  background: rgba(0, 0, 0, 0.5); /* black transparent color */
  position: absolute;
  top: 90px;
  width: 100%;
}

.create-btn-gradient {
  background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
  width: 100%;
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
      roomTypeItems: [
        'Queen Bedroom Deluxe', 
        'King Bedroom Deluxe Suite', 
        'Queen Bedroom Golf View', 
        'King Bedroom Deluxe',
        'King Bedroom Studio',
        'King Bedroom Suite'
        ],

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
      roomFD.append('roomName', this.roomFD.roomName);
      roomFD.append('roomType', this.roomFD.roomType);
      roomFD.append('roomRatings', this.roomFD.roomRatings);
      roomFD.append('roomPrice', this.roomFD.roomPrice);
      roomFD.append('roomDescription', this.roomFD.roomDescription);

      axios.post('http://localhost:8000/api/room/createRoom', roomFD)
      .then((response) => {
        this.alertToggle = 'success';
        console.log(response);
        localStorage.setItem('room_data', JSON.stringify(response.data));

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