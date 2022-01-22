import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import UpdateUserAccount from '@/components/UpdateUserAccount.vue'
import AdminPage from '../views/AdminPage.vue'
import MyProfile from '../views/MyProfile.vue'
import CreateBooking from '../views/CreateBooking.vue'
import CreateRoom from '../views/CreateRoom.vue'
import MyBookings from '../views/MyBookings.vue'
import MyRooms from '../views/MyRooms.vue'
import UpdateBooking from '../views/UpdateBooking.vue'
import UpdateRoom from '../views/UpdateRoom.vue'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/update_user_account/:id',
    name: 'update-user-account',
    component: UpdateUserAccount
  },
  {
    path: '/admin_page',
    name: 'admin-page',
    component: AdminPage
  },
  {
    path: '/my_profile',
    name: 'my-profile',
    component: MyProfile
  },
  {
    path: '/create_booking',
    name: 'create-booking',
    component: CreateBooking
  },
  {
    path: '/create_room',
    name: 'create-room',
    component: CreateRoom
  },
  {
    path: '/my_bookings',
    name: 'my-bookings',
    component: MyBookings
  },
  {
    path: '/my_rooms',
    name: 'my-rooms',
    component: MyRooms
  },
  {
    path: '/update_booking/:id',
    name: 'update-booking',
    component: UpdateBooking
  },
  {
    path: '/update_room/:id',
    name: 'update-room',
    component: UpdateRoom
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
