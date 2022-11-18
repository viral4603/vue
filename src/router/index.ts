import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppCell from '../components/app-cell.vue'
import PageNotFound from '@/components/page-not-found.vue'
import productRoute from '@/product/route/product.route'
import RegistrationContainer from '@/components/registration/registration-container/registration.container.vue'
import auth  from '@/resuse-function/authntication'
const { isUserLogin } = auth();

//Appcell routing
const appCellRoute = [
  {
    path: 'home',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
    )
  },
  {
    path:'/',
    redirect:'home'
  },
  {
    path:'checkout',
    name:'checkout',
    component:() => import(/* webpackChunkName: "CheckoutDeatails" */ "@/checkout/checkout-details-container/checkout-details.container.vue")
  },
  {
    path:'checkout/:id',
    name:'checkoutwithid',
    component:() => import(/* webpackChunkName: "CheckoutDeatails" */ "@/checkout/checkout-details-container/checkout-details.container.vue"),
    beforeEnter:isUserLogin
  },
  {
    path:'orders',
    name:'orders',
    component:() => import(/* webpackChunkName: "OrderDetails" */ "@/order/order-details-container/order-details.containner.vue")
  },
  {
    path:'user-profile',
    name:'userProfile',
    component:() => import(/* webpackChunkName: "UserProfile" */ "@/user/components/user-profile/user-profile.container.vue")
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
  {
    path:'/registration',
    name:'registration',
    component:RegistrationContainer
  },
  {
    path:'/login',
    name:'login',
    component:() => import(/* webpackChunkName: "loginUSer" */ "@/components/login/login-container/login.container.vue")
  }
  // { path: "/:pathMatch(.*)*", name: "PageNotFound", component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next) => {
  if(!to.meta.authorized) {
    next()
  }else {
    alert('please log in first')
  }
})

export default router
