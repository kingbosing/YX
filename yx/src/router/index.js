import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Together from '@/components/Together'
import News from '@/components/News'

import Details from '@/components/Details'


Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },  
    {
      path: '/Together',
      name: 'Together',
      component: Together,     
    }, 
     {
      path: '/',
      name: 'Home',
      redirect: Home
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
