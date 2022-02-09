<template>
<div class="my-rooms bg-image-my-room">
    <v-container>
        <v-card class="mt-2">
            <v-card-title>My Hotel Rooms<v-btn fab small text class="create-room-btn"><v-icon>mdi-plus-circle-outline</v-icon></v-btn></v-card-title>
        </v-card>

        <v-card class="mt-4">
            <v-carousel hide-delimiters show-arrows-on-hover cycle height="180">
                <v-carousel-item v-for="(RoomImageItem, i) in RoomImageItems" :key="i" :src="RoomImageItem.src">
                </v-carousel-item>
            </v-carousel>
        </v-card>
        
        <v-card class="mt-4">
            <v-card-title class="pt-3 pb-1">Room name</v-card-title>
            <v-card-text class="pb-2">
                <div><v-icon small class="pr-2">mdi-room-service</v-icon>Room Type</div>
                <div><v-icon small class="pr-2">mdi-star</v-icon>Room Ratings</div>
                <div><v-icon small class="pr-2">mdi-currency-usd</v-icon>Room Price</div>
                <div class="pt-4"><v-icon small class="pr-2">mdi-information</v-icon>Room Description</div>
            </v-card-text>

            <v-card-actions class="pl-4 pt-0">
                <v-btn small fab text color="green"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn small fab text color="red"><v-icon>mdi-trash-can</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.bg-image-my-room {
background-image: url('../assets/images/palm_tree_resort.png');
background-size: cover;
background-repeat: none;
background-position: center center;
position: absolute;
height: 100%;
width: 100%;
}

.create-room-btn {
    position: absolute;
    top: 11px;
    right: 18px;
}
</style>

<script>
export default {
    data() {
        return {
            RoomImageItems: [
                { src: require('@/assets/images/king_bedroom_studio.png') },
                { src: require('@/assets/images/king_bedroom_deluxe_suite.png') },
                { src: require('@/assets/images/king_bedroom_deluxe.png') },
                { src: require('@/assets/images/queen_bedroom_deluxe.png') },
                { src: require('@/assets/images/queen_bedroom_golf_view.png') },
                { src: require('@/assets/images/king_bedroom_suite.png') },
            ]
        }
    }
}
</script>