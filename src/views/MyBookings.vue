<template>
<div class="my-bookings">
    <v-container>
        <v-card>
            <v-img src="../assets/images/the_anam_villa_view.png">
            <v-card-title class="pa-2 title-content justify-center white--text">My Bookings</v-card-title>
            </v-img>
        </v-card>

        <!---- Alert message ---->
        <v-alert dense type="success" class="alert-message" v-if="alertToggle == 'success'">Booking successfully deleted</v-alert>
        <v-alert dense type="error" class="alert-message" v-if="alertToggle == 'error'">Unable to delete bookings</v-alert>
        
        <v-card class="mt-4" v-for="bookingList in bookingLists" :key="bookingList.id">
            <v-card-text class="pb-2">
                <div><v-icon small class="pr-2">mdi-room-service</v-icon>{{bookingList.room_id}}</div>
                <div><v-icon small class="pr-2">mdi-account</v-icon>{{bookingList.user_id}}</div>
                <div><v-icon small class="pr-2">mdi-room-service</v-icon>{{bookingList.num_of_nights}}</div>
                <div><v-icon small class="pr-2">mdi-calendar</v-icon>{{bookingList.checkInDate}}</div>
                <div><v-icon small class="pr-2">mdi-calendar</v-icon>{{bookingList.checkOutDate}}</div>
            </v-card-text>
            <v-card-actions class="pl-4 pt-0">
                <v-btn small fab text color="green" :to="{name: 'update-booking', params: { id: bookingList.id }}"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn small fab text color="red" @click.prevent="deleteBooking(bookingList.id)"><v-icon>mdi-trash-can</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.title-content {
    background: rgba(0, 0, 0, 0.5); /* black transparent color */
    position: absolute;
    top: 68px;
    width: 100%;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            alertToggle: 'none',
            bookingLists: []
        }
    },

    mounted() {
        this.showAllBookings();
    },

    methods: {
        showAllBookings() {
            axios.get('http://localhost:8000/api/booking/showAllBookings')
            .then((response) => {
                this.bookingLists = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },

        deleteBooking(id) {
            axios.delete(`http://localhost:8000/api/booking/deleteBooking/${id}`)
            .then((response) => {
                this.alertToggle = 'success';
                console.log(response);
                this.showAllBookings();
            })
            .catch((error) => {
                console.log(error);
                this.alertToggle = 'error';
            });
        }
    }
}
</script>