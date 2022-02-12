<template>
<div class="welcome welcome-bg-image">
    <v-container>
        <v-card class="pa-1">
            <p class="v-card-subtitle pl-4 pt-3 mb-0 font-weight-regular">Welcome to Royal Shoreline Hotel!</p>
            <div class="is_loggedin_info" v-if="authUser">
                <v-card-subtitle class="pb-0 font-weight-medium">Hi, {{authUser.fullname}}</v-card-subtitle>
                <v-card-subtitle class="pt-0 font-weight-medium">Logged In, {{authUser.user_type}}</v-card-subtitle>
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
                    <div class="icon-group-btn">
                        <v-btn text @click="toggle_dark_mode">
                        <v-icon class="pr-2">mdi-theme-light-dark</v-icon>Dark Mode</v-btn>
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
import axios from 'axios'

export default {
    data() {
        return {
            ImageItems: [
                { src: require('@/assets/images/the_anam_villa_view.png') },
                { src: require('@/assets/images/resort_outdoor_chair.png') },
                { src: require('@/assets/images/hotel_resort_villa.png') },
                { src: require('@/assets/images/the_anam_outdoor_resort.png') }
            ],
            authUser: []
        }
    },

    created() {
        axios.get('http://localhost:8000/api/auth/getAuthUser', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
        .then((response) => {
            this.authUser = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },

    methods: {
        toggle_dark_mode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
        }
    },

    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            if (theme === "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    }
}
</script>