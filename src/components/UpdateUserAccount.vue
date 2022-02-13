<template>
<div class="update-user-account update-account-image-bg">
    <v-container>
        <v-card class="v-card-content pa-1">
            <v-card-title class="font-weight-bold">Update User</v-card-title>

            <!---- Alert messages ---->
            <v-alert dense type="success" class="alert-message" v-if="alertToggle == 'success'">User successfully updated</v-alert>
            <v-alert dense type="error" class="alert-message" v-if="alertToggle == 'error'">Please complete required fields</v-alert>

            <v-form method="POST" ref="form" v-model="valid" lazy-validation @submit.prevent="updateUser">
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="updregisterFD.email" name="email" :rules="updregisterFD.emailRules" required
                    label="Email" prepend-inner-icon="mdi-email-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="updregisterFD.password" name="password" :rules="updregisterFD.passwordRules" required
                    label="Password" prepend-inner-icon="mdi-lock-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="updregisterFD.fullname" name="fullname" :rules="updregisterFD.fullnameRules" required
                    label="Fullname" prepend-inner-icon="mdi-account-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="updregisterFD.phone" name="phone" :rules="updregisterFD.phoneRules" required
                    label="Phone" prepend-inner-icon="mdi-phone-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-select :items="userTypeItems" label="User Type" dense outlined
                    prepend-inner-icon="mdi-account-key pr-2" v-model="updregisterFD.user_type" name="user_type" :rules="[v => !!v || 'User Type is required']" required>
                    </v-select>
                </div>
                <div class="form-group">
                    <v-btn dense class="mt-0 mb-3 update-account-btn-gradient white--text" type="submit" @click="validate">Update User</v-btn>
                </div>
            </v-form>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.update-account-image-bg {
    background-image: url('../assets/images/palm_tree_resort.png');
    background-size: cover;
    background-repeat: none;
    background-position: center center;
    position: absolute;
    width: 100%;
    height: 100%;
}

.form-group {
    margin-left: 15px;
    margin-right: 15px;
}

.update-account-btn-gradient {
  background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
  width: 100%;
}

.alert-message {
    margin-left: 15px;
    margin-right: 15px;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            updregisterFD: {
                email: '',
                emailRules: [
                    v => !!v || 'email is required',
                    v => /.+@.+\..+/.test(v) || 'email must be valid'
                ],

                password: '',
                passwordRules: [
                    v => !!v || 'password is required',
                    v => (v && v.length >= 8) || 'password must be more than 8 characters',
                    v => (v && v.length <= 18) || 'password must be less than 18 characters'
                ],

                fullname: '',
                fullnameRules: [
                    v => !!v || 'fullname is required'
                ],

                phone: '',
                phoneRules: [
                    v => !!v || 'phone is required'
                ],

                user_type: null
            },

            userTypeItems: [ 'admin', 'customer'],

            valid: true,
            alertToggle: false
        }
    },

    created() {
        axios.get(`http://localhost:8000/api/auth/getUser/${this.$route.params.id}`)
        .then((response) => {
            this.updregisterFD = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        updateUser() {
            const updregisterFD = new FormData();
            updregisterFD.append('email', this.updregisterFD.email);
            updregisterFD.append('password', this.updregisterFD.password);
            updregisterFD.append('fullname', this.updregisterFD.fullname);
            updregisterFD.append('phone', this.updregisterFD.phone);
            updregisterFD.append('user_type', this.updregisterFD.user_type);

            axios.post(`http://localhost:8000/api/auth/updateUser/${this.$route.params.id}`, updregisterFD)
            .then((response) => {
                this.alertToggle = 'success';
                console.log(response);

                setTimeout(() => {
                    this.alertToggle = false;
                    this.$router.push({name: 'admin-page'});
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                this.alertToggle = 'error';
            });
        }
    }

    
}
</script>