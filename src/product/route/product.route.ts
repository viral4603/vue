import store from "@/store"
import auth from "@/resuse-function/authntication"
const { isUserLogin } = auth()
const productRoute = [
  {
    path: 'electronics',
    name: 'electronics',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue")
  },
  {
    path: 'tvs-and-appliances',
    name: 'TVs & Appliances',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue")
  },
  {
    path: 'men',
    name: 'men',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue")
  },
  {
    path: 'women',
    name: 'women',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue")
  },
  {
    path: 'baby-and-kids',
    name: 'Baby & Kids',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue")
  },
  {
    path: 'home-and-furniture',
    name: 'Home & Furniture',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue")
  },
  {
    path: 'sports-books-and-more',
    name: 'Sports, Books & More',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue")
  },
  {
    path: 'cart-list',
    name: 'cart',
    component: () => import(/* webpackChunkName: "ProductList" */ "@/cart/cart-list-container/cart-list.container.vue"),
    beforeEnter:isUserLogin
  },
  {
    path:'product',
    name:'product',
    redirect:'electronics'
  }
]

export default productRoute