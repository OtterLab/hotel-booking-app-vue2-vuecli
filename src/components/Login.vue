<template>
<div class="login image-bg">
    <v-container>
        <v-card class="v-card-content pa-1">
            <v-card-title class="font-weight-bold">Login</v-card-title>

            <!----- Alert messages ------>
            <v-alert dense type="success" class="alert-message" v-if="alertToggle == true">Login Successfully</v-alert>
            <v-alert dense type="error" class="alert-message" v-if="alertToggle == 'error'">Incorrect email or password</v-alert>

            <v-form method="POST" ref="form" v-model="valid" lazy-validation @submit.prevent="login">
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="loginFD.email" name="email" :rules="loginFD.emailRules" required
                    label="Email" prepend-inner-icon="mdi-email-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field outlined color="blue darken-1" dense v-model="loginFD.password" name="password" :rules="loginFD.passwordRules" required
                    label="Password" prepend-inner-icon="mdi-lock-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-btn dense class="mt-0 mb-3 login-btn-gradient white--text" type="submit" @click="validate">Login</v-btn>
                </div>
            </v-form>
            <div class="quick-link-content">
                <p class="quick-link-text mb-1">If not a member?<v-btn small text color="blue darken-2" to="/register">Register</v-btn></p>
            </div>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.v-card-content {
    top: 50px;
}

.image-bg {
    background-image: url('../assets/images/the_anam_resort.png');
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

.login-btn-gradient {
  background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
  width: 100%;
}

.quick-link-content {
    text-align: center;
    padding-top: 1em;
}

.quick-link-text {
    font-size: 10pt;
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
            loginFD: {
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
            },
            valid: true,
            alertToggle: 'none'
        }
    },

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        login() {
            const loginFD = new FormData();
            loginFD.append('email', this.loginFD.email);
            loginFD.append('password', this.loginFD.password);

            axios.post('http://localhost:8000/api/auth/login', loginFD)
            .then((response) => {
                console.log(response);
                // store login data in localStorage
                localStorage.setItem('logged_in_user', JSON.stringify(response.data));
                localStorage.setItem('token', response.data.token);
                this.alertToggle = true;

                setTimeout(() => {
                    this.alertToggle = 'none';
                    this.$router.push({name: 'welcome'});
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