<template>
<div class="my-rooms">
    <v-container>
        <v-card class="mt-2">
            <v-card-title>My Hotel Rooms<v-btn fab small text class="create-room-btn" to="/create_room"><v-icon>mdi-plus-circle-outline</v-icon></v-btn></v-card-title>
        </v-card>

        <v-card class="mt-4">
            <v-carousel hide-delimiters show-arrows-on-hover cycle height="180">
                <v-carousel-item v-for="(RoomImageItem, i) in RoomImageItems" :key="i" :src="RoomImageItem.src">
                </v-carousel-item>
            </v-carousel>
        </v-card>

        <v-alert dense class="alert-message" type="success" v-if="alertToggle == 'success'">Room successfully deleted</v-alert>
        <v-alert dense class="alert-message" type="error" v-if="alertToggle == 'error'">Unable to delete room</v-alert>
        
        <v-card class="mt-4" v-for="roomList in roomLists" :key="roomList.id">
            <v-card-title class="pt-3 pb-1">{{roomList.roomName}}</v-card-title>
            <v-card-text class="pb-2">
                <div><v-icon small class="pr-2">mdi-pound-box</v-icon>{{roomList.id}}</div>
                <div><v-icon small class="pr-2">mdi-room-service</v-icon>{{roomList.roomType}}</div>
                <div><v-icon small class="pr-2">mdi-star</v-icon>{{roomList.roomRatings}}</div>
                <div><v-icon small class="pr-2">mdi-currency-usd</v-icon>{{roomList.roomPrice}}</div>
                <div class="pt-4"><v-icon small class="pr-2">mdi-information</v-icon>{{roomList.roomDescription}}</div>
            </v-card-text>

            <v-card-actions class="pl-4 pt-0 pb-0">
                <v-btn small fab text color="green" :to="{name: 'update-room', params: { id: roomList.id }}"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn small fab text color="red" @click.prevent="deleteRoom(roomList.id)"><v-icon>mdi-trash-can</v-icon></v-btn>
            </v-card-actions>
            <div class="mt-0 pa-3">
                <v-btn v-if="buttonToggle == true" to="/create_booking" class="booking-btn white--text">Book Now</v-btn>
            </div>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.create-room-btn {
    position: absolute;
    top: 11px;
    right: 18px;
}

.alert-message {
    margin-top: 15px;
    width: 100%;
}

.booking-btn {
    background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
    width: 100%;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            RoomImageItems: [
                { src: require('@/assets/images/king_bedroom_studio.png') },
                { src: require('@/assets/images/king_bedroom_deluxe_suite.png') },
                { src: require('@/assets/images/queen_bedroom_deluxe.png') },
                { src: require('@/assets/images/king_bedroom_deluxe.png') },
                { src: require('@/assets/images/queen_bedroom_golf_view.png') },
                { src: require('@/assets/images/king_bedroom_suite.png') },
            ],
            roomLists: [],
            alertToggle: 'none',
            buttonToggle: false
        }
    },

    mounted() {
        this.showAllRooms();
    },

    methods: {
        showAllRooms() {
            axios.get('http://localhost:8000/api/room/showAllRooms')
            .then((response) => {
                this.roomLists = response.data;
                this.buttonToggle = true;
            })
            .catch((error) => {
                console.log(error);
            });
        },

        deleteRoom(id) {
            axios.delete(`http://localhost:8000/api/room/deleteRoom/${id}`)
            .then((response) => {
                this.alertToggle = 'success';
                console.log(response);
                localStorage.removeItem('room_data');
                this.showAllRooms();
            })
            .catch((error) => {
                console.log(error);
                this.alertToggle = 'error';
            });
        }
    }
}
</script>