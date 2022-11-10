import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppCell from '../components/app-cell.vue'
import PageNotFound from '@/components/page-not-found.vue'
import productRoute from '@/product/route/product.route'

//Appcell routing
const appCellRoute = [
  {
    path: 'home',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
    )
  },
  ...productRoute,
  { path: "/:pathMatch(.*)*", name: "PageNotFound", component: PageNotFound },
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'default',
    component: AppCell,
    children: appCellRoute
  },
  // { path: "/:pathMatch(.*)*", name: "PageNotFound", component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
