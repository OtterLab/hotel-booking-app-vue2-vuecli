<template>
<div class="welcome welcome-bg-image">
    <v-container>
        <v-card class="pa-1">
            <p class="v-card-subtitle pl-4 pt-3 mb-0 font-weight-light">Welcome to Royal Shoreline Hotel!</p>
            <div>
                <!-- <v-card-title class="pt-0">Hi, {{authUser.fullname}} </v-card-title>
                <v-card-title class="pt-0">Email {{authUser.email}} </v-card-title> -->
            </div>
        </v-card>

        <v-card class="mt-4">
            <v-carousel hide-delimiters show-arrows-on-hover cycle height="180">
                <v-carousel-item v-for="(ImageItem,i) in ImageItems" :key="i" :src="ImageItem.src"></v-carousel-item>
            </v-carousel>
        </v-card>

        <v-card class="mt-4">
            <v-card-text>
                <v-row class="icon-content pa-1">
                    <div class="icon-group-btn">
                        <v-btn text to="/my_bookings">
                            <v-icon class="pr-2">mdi-book-edit</v-icon>
                            <div>View Bookings</div>
                        </v-btn>
                    </div>
                    <div class="icon-group-btn">
                        <v-btn text to="/my_rooms">
                            <v-icon class="pr-2">mdi-room-service</v-icon>
                            <div>View Rooms</div>
                        </v-btn>
                    </div>
                    <div class="icon-group-btn">
                        <v-btn text to="/update_user_account">
                            <v-icon class="pr-2">mdi-account</v-icon>
                            <div>My Account</div>
                        </v-btn>
                    </div>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.welcome-bg-image {
    background-image: url('../assets/images/resort_hotel_deck_chair.png');
    background-size: cover;
    background-repeat: none;
    background-position: center center;
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>

<script>
//import axios from 'axios'

export default {
    data() {
        return {
            ImageItems: [
                { src: require('@/assets/images/the_anam_villa_view.png') },
                { src: require('@/assets/images/resort_outdoor_chair.png') },
                { src: require('@/assets/images/hotel_resort_villa.png') },
                { src: require('@/assets/images/siem_reap_outdoor_resort.png') }
            ],
            error: null
        }
    }
}
</script>