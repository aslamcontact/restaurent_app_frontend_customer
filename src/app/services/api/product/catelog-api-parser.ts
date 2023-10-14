export interface ProductCatelogDate {
    name:String
    brand:String
    descriptions:[]
    about:[]
    quantity:Number
    price:Number
    getName():String

    }
export class ProductCatelogParser implements  ProductCatelogDate
{
    name: String
    brand: String
    descriptions:[]
    about:[]
    quantity: Number
    price: Number
    
    constructor(   name: String,
                   brand: String,
                   descriptions:[],
                   about:[],
                   quantity: Number,
                   price: Number,
                   
    )
    
    {
       this.name=name;
       this.brand=brand;
       this.descriptions=descriptions;
       this.about=about;
       this.quantity=quantity;
       this.price=price;

    }

    getName(): String {
        return this.name;
    }

}