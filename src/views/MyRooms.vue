<template>
<div class="my-rooms">
    <v-container>
        <h2 class="pl-1 pt-3 pb-5">My Hotel Rooms</h2>
        <v-card class="pb-2">
            <v-img height="180px" src="@/assets/images/queen_bedroom_deluxe.png"></v-img>
            <v-card-title class="pt-3 pb-1">Room name</v-card-title>
            <v-card-text class="pb-2">
                <div><v-icon small class="pr-2">mdi-room-service</v-icon>Room Type</div>
                <div><v-icon small class="pr-2">mdi-star</v-icon>Room Ratings</div>
                <div><v-icon small class="pr-2">mdi-currency-usd</v-icon>Room Price</div>
                <div class="pt-5">Room Description</div>
            </v-card-text>
            <v-card-actions class="pl-4">
                <v-btn class="book-btn" width="150px">Book Now</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>

.book-btn {
    background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
}
</style>