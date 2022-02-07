<template>
<div class="my-rooms">
    <v-container>
        <h2 class="pl-1 pt-2 pb-5">My Hotel Rooms</h2>
        <!----- Alert message ------>
        <v-alert dense type="success" v-if="alertToggle == 'success'">Room successfully created</v-alert>
        <v-alert dense type="error" v-if="alertToggle == 'error'">Please complete required fields</v-alert>

        <v-fab-transition>
            <v-btn small fab class="add-room-btn" to="/create_room"><v-icon>mdi-plus-circle-outline</v-icon></v-btn>
        </v-fab-transition>

        <v-card class="pb-2">
            <v-img height="180px" src="@/assets/images/queen_bedroom_deluxe.png"></v-img>

            <v-card-title class="pt-3 pb-1">Room name</v-card-title>
            <v-card-text class="pb-2">
                <div><v-icon small class="pr-2">mdi-room-service</v-icon>Room Type</div>
                <div><v-icon small class="pr-2">mdi-star</v-icon>Room Ratings</div>
                <div><v-icon small class="pr-2">mdi-currency-usd</v-icon>Room Price</div>
                <div class="pt-5"><v-icon small class="pr-2">mdi-information</v-icon>Room Description</div>
            </v-card-text>

            <v-card-actions class="pl-4">
                <v-btn small fab text color="green"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn small fab text color="red"><v-icon>mdi-trash-can</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.add-room-btn {
    position: absolute;
    top: 20px;
    right: 18px;
}
</style>

<script>
export default {
    data() {
        return {
            alertToggle: false
        }
    }
}
</script>