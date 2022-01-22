<template>
<v-app>
  <!------- navigation drawer -------->
  <v-navigation-drawer app v-model="drawer" class="blue-grey darken-3" dark>
    <v-list dense>
      <v-list-item v-for="item in navLinkItems" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!------ Logout button ------->
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <!----- app bar ----->
  <v-app-bar app flat color="blue-grey darken-3">
    <v-app-bar-nav-icon color="white" large @click="drawer = true"></v-app-bar-nav-icon>
    <v-img class="logo-img" src="@/assets/royal_shoreline_hotel_logo.svg" min-height="20" max-width="100"></v-img>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
</v-app>
</template>

<style scoped>
/* .splash-image {
  background-image: url('./assets/images/the_anam_resort.png');
  background-size: cover;
  background-repeat: none;
  background-position: center center;
  height: 100%;
} */
.logo-img {
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      navLinkItems: [
        { title: 'Welcome', icon: 'mdi-view-dashboard' },
        { title: 'My Bookings', icon: 'mdi-clipboard-list' },
        { title: 'My Rooms', icon: 'mdi-room-service' },
        { title: 'Admin', icon: 'mdi-shield-account' },
        { title: 'Login', icon: 'mdi-account' },
        { title: 'Register', icon: 'mdi-account-plus' },
      ]
    }
  }
}
</script>
