<template>
<div class="welcome welcome-bg-image">
    <v-container>
        <v-card class="pa-1">
            <p class="v-card-subtitle pl-4 pt-3 mb-0 font-weight-light">Welcome to Royal Shoreline Hotel!</p>
            <v-card-title class="pt-0">Hi, Your name</v-card-title>
        </v-card>

        <v-card class="mt-4">
            <v-carousel hide-delimiters show-arrows-on-hover cycle height="180">
                <v-carousel-item v-for="(ImageItem,i) in ImageItems" :key="i" :src="ImageItem.src"></v-carousel-item>
            </v-carousel>
        </v-card>

        <v-card class="mt-4">
            <v-card-text>
                <p class="quick-link-btn pl-3">Quick Links</p>
                <v-row class="icon-content">
                    <div class="icon-group-btn">
                        <v-btn text to="/my_bookings">
                            <v-icon>mdi-book-edit</v-icon>
                        </v-btn>
                    </div>
                    <div class="icon-group-btn">
                        <v-btn text to="/update_user_account">
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                    </div>
                    <div class="icon-group-btn">
                        <v-btn text @click="toggle_dark_mode">
                            <v-icon>mdi-theme-light-dark</v-icon>
                        </v-btn>
                    </div>
                    <div class="icon-group-btn">
                        <v-btn text to="/my_rooms">
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

.icon-group-btn {
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
    },

    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if(theme) {
            if(theme === "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
        }
    },

    methods: {
        toggle_dark_mode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
        }
    }
}
</script>