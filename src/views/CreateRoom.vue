<template>
  <div class="create-room">
    <v-container>
      <v-card>
        <v-card-title class="v-card-h2-title">Create Rooms</v-card-title>
        <v-form method="POST">
          <div class="form-group">
            <v-file-input dense outlined label="Room Image" color="blue darken-1" name="roomImage"></v-file-input>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Name" outlined color="blue darken-1" prepend-inner-icon="mdi-room-service pr-2"
            v-model="roomFD.roomName" name="roomName"></v-text-field>
          </div>
          
          <div class="form-group">
            <v-select dense label="Room Type" outlined color="blue darken-1" prepend-inner-icon="mdi-bed pr-2"
            v-model="roomFD.roomType" name="roomType"></v-select>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Price" outlined color="blue darken-1" prepend-inner-icon="mdi-currency-usd pr-2"
            v-model="roomFD.roomPrice" name="roomPrice"></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Ratings" outlined color="blue darken-1" prepend-inner-icon="mdi-star pr-2"
            v-model="roomFD.roomRatings" name="roomRatings"></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field dense label="Room Description" outlined color="blue darken-1" prepend-inner-icon="mdi-information pr-2"
            v-model="roomFD.roomDescription" name="roomDescription"></v-text-field>
          </div>
          <div class="form-group">
            <v-btn dense class="mt-0 mb-3 create-btn-gradient white--text">Create Room</v-btn>
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
//import axios from 'axios'

export default {
  data() {
    return {
      roomFD: {
        roomImage: null,
        roomName: '',
        roomType: null,
        roomPrice: '',
        roomRatings: '',
        roomDescription: ''
      }
    }
  }
}
</script>