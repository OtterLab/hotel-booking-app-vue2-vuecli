<template>
<div class="login image-bg">
    <v-container>
        <v-card class="v-card-content pa-1">
            <v-card-title class="font-weight-bold">Login</v-card-title>
            <v-form method="POST">
                <div class="form-group">
                    <v-text-field name="email" outlined color="blue darken-1" dense 
                    label="Email" prepend-inner-icon="mdi-email-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field name="password" outlined color="blue darken-1" dense 
                    label="Password" prepend-inner-icon="mdi-lock-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-btn dense class="mt-0 mb-3 login-btn-gradient white--text">Login</v-btn>
                </div>
            </v-form>
            <div class="quick-link-content">
                <p class="quick-link-text mb-1">If not a member?<v-btn small text color="blue darken-3" to="/register">Register</v-btn></p>
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
</style>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>