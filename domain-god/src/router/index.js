import Vue from "vue";
import VueRouter from "vue-router";
import Handbook from "../views/handbook.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/level'
  },
  {
    path: "/",
    name: "Handbook",
    component: Handbook,
    children:[
      {
        path:'/level',
        component:()=>import('../components/handbook/level.vue')
      },
      {
        path:'/spirit',
        component:()=>import('../components/handbook/spirit.vue')
      },
      {
        path:'/territory',
        component:()=>import('../components/handbook/territory.vue')
      },{
        path:'/skill',
        component:()=>import('../components/handbook/skill.vue')
      },{
        path:'/magic',
        component:()=>import('../components/handbook/magic.vue')
      },{
        path:'/push',
        component:()=>import('../components/handbook/Push.vue')
      }
    ]
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/My.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
