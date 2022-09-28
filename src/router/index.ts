import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayOut from "@/views/layout/LayOut.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LayOut,
    redirect:{name:"homeson"},
    children:[
      {
        path:"/home",
        name:"homeson",
        component:()=>import ("@/views/HomeView.vue")
      }
    ]
  },
  {
    path: "/fenxiao",
    name: "fenxiao",
    component:LayOut,
    redirect:{name:"type"},
    children:[
      {
        path:"type",
        name:"type",
        component:()=>import ("@/views/FenXiao.vue")
      }

    ]
  },
  {
    path: "/mucart",
    name: "mucart",
    component: LayOut,
    redirect:{name:"shop"},
    children:[
      {
        path:"shop",
        name:"shop",
        component:()=>import ("@/views/MyCart.vue")

      }
    ]
  },
  {
    path: "/mine",
    name: "mine",
    component: LayOut,
    redirect:{name:"detail"},
    children:[
      {
        path:"detail",
        name:"detail",
        component:()=>import("@/views/MineView.vue")
      }

    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
