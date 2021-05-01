import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tabs from "../views/Tabs.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin/Admin.vue";
import Create from "../views/Admin/create.vue";
import Modify from "../views/Admin/modify.vue";
import Modify1 from "../views/Admin/modify1.vue";
import SpaceInfo from "../views/SpaceInfo.vue";



const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/tab2",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/create",
    component: Create,
  },
  {
    path: "/modify",
    component: Modify,
  },
  {
    path: "/modify1/:spaceID",
    component: Modify1,
  },
  {
    path: "/SpaceInfo/:spaceID",
    component: SpaceInfo,
    },
    
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
