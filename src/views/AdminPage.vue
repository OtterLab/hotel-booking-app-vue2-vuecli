<template>
<div class="admin-page">
    <v-container>
        <v-card>
            <v-card-title>Admin Page</v-card-title>
            <v-card-text class="pb-2">
                <div>Manage users, bookings and rooms</div>
            </v-card-text>
            <v-card-actions class="mt-0 pb-3 flex-wrap">
                <div class="admin-btn-group">
                    <v-btn to="/register"><v-icon>mdi-account-plus</v-icon></v-btn>
                </div>
                <div class="admin-btn-group">
                    <v-btn to="/my_bookings"><v-icon>mdi-book</v-icon></v-btn>
                </div>
                <div class="admin-btn-group">
                    <v-btn to="/create_room"><v-icon>mdi-room-service</v-icon></v-btn>
                </div>
                <div class="admin-btn-group">
                    <v-btn to="/create_booking"><v-icon>mdi-book-edit</v-icon></v-btn>
                </div>
            </v-card-actions>
        </v-card>

        <!---- Alert message ---->
        <v-alert dense type="success" class="alert-message" v-if="alertToggle == 'success'">User successfully deleted</v-alert>
        <v-alert dense type="error" class="alert-message" v-if="alertToggle == 'error'">Unable to delete user</v-alert>

        <v-card class="mt-4" v-for="user in users" :key="user.id">
            <v-card-text>
                <div><v-icon class="pr-3">mdi-pound-box</v-icon>{{user.id}}</div>
                <div><v-icon class="pr-3">mdi-email</v-icon>{{user.email}}</div>
                <div><v-icon class="pr-3">mdi-account</v-icon>{{user.fullname}}</div>
                <div><v-icon class="pr-3">mdi-phone</v-icon>{{user.phone}}</div>
                <div><v-icon class="pr-3">mdi-account-key</v-icon>{{user.user_type}}</div>
            </v-card-text>
            <v-card-actions class="pl-4 pt-0">
                <v-btn small fab text color="green" :to="{name: 'update-user-account', params: { id: user.id }}"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn small fab text color="red" @click.prevent="deleteUser(user.id)"><v-icon>mdi-trash-can</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.admin-btn-group {
    margin: 6px;
}

.alert-message {
    margin-top: 13px;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            alertToggle: 'none',
            users: []
        }
    },

    mounted() {
        this.showAllUsers();
    },

    methods: {
        showAllUsers() {
            axios.get('http://localhost:8000/api/auth/showAllUsers')
            .then((response) => {
                this.users = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },

        deleteUser(id) {
            axios.delete(`http://localhost:8000/api/auth/deleteUser/${id}`)
            .then((response) => {
                this.alertToggle = 'success';
                console.log(response);
                this.showAllUsers();
            })
            .catch((error) => {
                console.log(error);
                this.alertToggle = 'error';
            });
        }
    }
}
</script>