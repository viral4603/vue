import { ProductList } from "../model/product.model";

 export interface Adapter<T, Request = any, Response = any> {
    /**
     * this will adpter request 
     */
    toRequest?(item: T): Request;
    /**
     * This will convert the response into T(type of object) object
     */
    toResponse?(item: Response): T;
}

export class ProductListAdapter implements Adapter<ProductList[]> {
    public toResponse(item: any): ProductList[] {
        const newProductList:ProductList[] = [];
        item.forEach((value:any)=>{
            let getPayPrice = Math.floor(value.price - (value.price/value.discountPercentage))
            const productData:ProductList = new ProductList(
                value.id,
                value.title,
                value.description,
                value.price,
                value.discountPercentage,
                value.rating,
                value.stock,
                value.brand,
                value.category,
                getPayPrice,
                value.image                
            );
            newProductList.push(productData)
        })
        return newProductList;
    }
}
const productListAdpter = new ProductListAdapter()
export { productListAdpter }
