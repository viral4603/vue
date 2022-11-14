export class ProductList {
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string
    sellingPrice:number;
    
    constructor(
        id:number,
        title:string,
        description:string,
        price:number,
        discountPercentage:number,
        rating:number,
        stock:number,
        brand:string,
        category:string,
        sellingPrice:number,
        ) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.price = price;
            this.discountPercentage = discountPercentage;
            this.rating = rating;
            this.stock = stock;
            this.brand = brand;
            this.category = category;
            this.sellingPrice = sellingPrice;

        }


}