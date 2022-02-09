<template>
<div class="register register-image-bg">
    <v-container>
        <v-card class="v-card-content pa-1">
            <v-card-title class="font-weight-bold">Register</v-card-title>

            <!---- Alert messages ---->
            <v-alert dense type="success" class="alert-message" v-if="alertToggle == 'success'">User successfully created</v-alert>
            <v-alert dense type="error" class="alert-message" v-if="alertToggle == 'error'">Please complete required fields</v-alert>

            <v-form method="POST" ref="form" v-model="valid" lazy-validation @submit.prevent="register">
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="registerFD.email" name="email" :rules="registerFD.emailRules" required
                    label="Email" prepend-inner-icon="mdi-email-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="registerFD.password" name="password" :rules="registerFD.passwordRules" required
                    label="Password" prepend-inner-icon="mdi-lock-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="registerFD.fullname" name="fullname" :rules="registerFD.fullnameRules" required
                    label="Fullname" prepend-inner-icon="mdi-account-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="registerFD.phone" name="phone" :rules="registerFD.phoneRules" required
                    label="Phone" prepend-inner-icon="mdi-phone-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-select :items="userTypeItems" label="User Type" dense outlined
                    prepend-inner-icon="mdi-account-key pr-2" v-model="registerFD.user_type" name="user_type" :rules="[v => !!v || 'User Type is required']" required>
                    </v-select>
                </div>
                <div class="form-group">
                    <v-btn dense class="mt-0 mb-3 register-btn-gradient white--text" type="submit" @click="validate">Register</v-btn>
                </div>
            </v-form>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.register-image-bg {
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

.register-btn-gradient {
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
            registerFD: {
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

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        register() {
            const registerFD = new FormData();
            registerFD.append('email', this.registerFD.email);
            registerFD.append('password', this.registerFD.password);
            registerFD.append('fullname', this.registerFD.fullname);
            registerFD.append('phone', this.registerFD.phone);
            registerFD.append('user_type', this.registerFD.user_type);

            axios.post('http://localhost:8000/api/auth/register', registerFD)
            .then((response) => {
                this.alertToggle = 'success';
                console.log(response);
                setTimeout(() => {
                    this.alertToggle = false;
                    this.$router.push({name: 'login'});
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