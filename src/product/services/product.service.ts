import Http from "@/interceptor/http.interceptor";
import { ProductListAdapter } from "../adpter/product.adapter";
const url = process.env.VUE_APP_URL;
class ProductService {
    getProductList() {
        return Http.get(`${url}products`).then((res:any)=>{
            return ProductListAdapter.toResponse(res.data)
        })
    }
    //get categories 
    getCategoriesList() {
        return Http.get(`${url}categories`).then((res:any)=>{
            return res.data
        })
    } 

    //get categories vise product 
    getCategoryViseProduct(cat:any) {
        cat.replace(/-/g, "")
        return Http.get(`${url}products?category=${cat}`).then((res:any)=>{
            return ProductListAdapter.toResponse(res.data)
        })
    }
    //get id vise product based on cart list id

    postOrder(obj:any){
        return Http.post(`${url}orders`,obj)
    }
}

const productService = new ProductService(); 
export default productService;