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
        <v-btn block class="logout-btn-gradient">
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
div.container.container--fluid {
  padding: 0; /* remove padding div container for all pages */
}

.logo-img {
  margin: 0 auto;
}

.logout-btn-gradient {
  background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
}
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      navLinkItems: [
        { title: 'Welcome', icon: 'mdi-view-dashboard', to: '/welcome' },
        { title: 'My Bookings', icon: 'mdi-clipboard-list', to: '/my_bookings' },
        { title: 'My Rooms', icon: 'mdi-room-service', to: '/my_rooms' },
        { title: 'Admin', icon: 'mdi-shield-account', to: '/admin_page' },
        { title: 'Login', icon: 'mdi-account', to: '/' },
        { title: 'Register', icon: 'mdi-account-plus', to: '/register' },
      ]
    }
  }
}
</script>
