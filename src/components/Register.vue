<template>
<div class="register register-image-bg">
    <v-container>
        <v-card class="v-card-content pa-1">
            <v-card-title class="font-weight-bold">Register</v-card-title>
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
                    <v-text-field name="fullname" outlined color="blue darken-1" dense 
                    label="Fullname" prepend-inner-icon="mdi-account-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field name="phone" outlined color="blue darken-1" dense 
                    label="Phone" prepend-inner-icon="mdi-phone-outline pr-2"></v-text-field>
                </div>
                <div class="form-group">
                    <v-btn dense class="mt-0 mb-3 register-btn-gradient white--text">Register</v-btn>
                </div>
            </v-form>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.v-card-content {
    top: 20px;
}

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
</style>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>