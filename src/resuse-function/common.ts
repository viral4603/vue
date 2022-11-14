import productStore from "@/product/store/product.store";

export default function common() {
    function findIndexfromCartItem(id:any) {
        return productStore.getters.getCart.findIndex((ele:any) => ele === id);
    }
    return {
        findIndexfromCartItem
    }
}