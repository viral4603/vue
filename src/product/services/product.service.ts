import Http from "@/interceptor/http.interceptor";
const url = process.env.VUE_APP_URL;
class ProductService {
    getProductList() {
        return Http.get(`${url}products`).then((res:any)=>{
            return res
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
        return Http.get(`${url}products?category=${cat}`)
    }
    //get id vise product based on cart list id
}

const productService = new ProductService(); 
export default productService;