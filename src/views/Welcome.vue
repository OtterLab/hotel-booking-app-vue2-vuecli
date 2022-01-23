<template>
<div class="welcome welcome-bg-image">
    <v-container>
        <v-card class="pa-1">
            <v-card-subtitle class="pb-0 black--text">Welcome to Royal Shoreline Hotel!</v-card-subtitle>
            <v-card-title class="pt-0">Hi, Your name</v-card-title>
        </v-card>

        <v-card class="mt-4">
            <v-carousel hide-delimiters show-arrows-on-hover cycle height="180">
                <v-carousel-item v-for="(ImageItem,i) in ImageItems" :key="i" :src="ImageItem.src"></v-carousel-item>
            </v-carousel>
        </v-card>

        <v-card class="mt-4">
            <v-card-text>
                <v-card-subtitle class="pt-0 pl-1">Quick Links</v-card-subtitle>
                <v-row class="icon-content">
                    <div class="icon-btn">
                        <v-btn text>
                            <v-icon>mdi-book-edit</v-icon>
                        </v-btn>
                    </div>
                    <div class="icon-btn">
                        <v-btn text>
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                    </div>
                    <div class="icon-btn">
                        <v-btn text>
                            <v-icon>mdi-theme-light-dark</v-icon>
                        </v-btn>
                    </div>
                    <div class="icon-btn">
                        <v-btn text>
                            <v-icon>mdi-room-service</v-icon>
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

.icon-btn {
    padding: .2em;
}
</style>

<script>
export default {
    data() {
        return {
            ImageItems: [
                { src: require('@/assets/images/the_anam_villa_view.png') },
                { src: require('@/assets/images/resort_outdoor_chair.png') },
                { src: require('@/assets/images/hotel_resort_villa.png') },
                { src: require('@/assets/images/siem_reap_outdoor_resort.png') }
            ]
        }
    }
}
</script>