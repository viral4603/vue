let catagory =  'Men' || 'electronics'
const productRoute = [
    {
        path:'electronics',
        name:'electronics',
        component:() =>import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
          )
    },
    {
        path:'tvs-and-appliances',
        name:'TVs & Appliances',
        component:() =>import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
          )
    },
    {
        path:'men',
        name:'men',
        component:() =>import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
          )
    },
    {
        path:'women',
        name:'women',
        component:() =>import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
          )
    },
    {
        path:'baby-and-kids',
        name:'Baby & Kids',
        component:() =>import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
          )
    },
    {
        path:'home-and-furniture',
        name:'Home & Furniture',
        component:() =>import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
          )
    },
    {
        path:'Sports, Books & More',
        name:'Sports, Books & More',
        component:() =>import(/* webpackChunkName: "ProductList" */ "@/product/components/product-list-container/product-list.presentation.vue"
          )
    },
]

export default productRoute