import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import details from './components/details.vue'
import Vehicle from './components/vehicle.vue'
import Manage from './components/background/nav.vue'
import det from './components/background/details.vue'
import Imgs from './components/background/imgs.vue'
import show from './components/show.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
   {path:"/",component:Index},
   {path:"/login",component:Login},
   {path:"/register",component:Register},
   {path:"/details/:lid",props:true,component:details},
   {path:"/vehicle",component:Vehicle},
   {path:"/manage",component:Manage},
   {path:"/det",component:det},
   {path:"/Imgs",component:Imgs},
   {path:"/show/:lid",props:true,component:show}
  ]
})