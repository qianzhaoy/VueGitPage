import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import AboutMe from '@/view/aboutMe'
import Skill from '@/view/skill'
import Production from '@/view/production'
import Connection from '@/view/connection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe
    },{
      path: '/skill',
      name: 'skill',
      component: Skill
    },{
      path: '/production',
      name: 'production',
      component: Production
    },{
      path: '/connection',
      name: 'connection',
      component: Connection
    }
  ]
})
