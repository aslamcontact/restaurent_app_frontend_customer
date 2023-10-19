interface ProductCatelogDate {
    
    getCategory():String  //name
    getShopName():String  //brand
         //categories[]   
    getImage(imageName:String):String

    }

    interface ProductApi {
    
        getProductName():String  //value
        getProductPrice():Number  //price
        getProductQty():Number    //Quantity
        getProductImage():string  
            
        }
    

export  class ProductsParser implements ProductApi {
    productName:String=""
    productPrice:Number=0.0
    productQty:Number
    private imageUrl:string=''



    constructor( productName:string,
                 productPrice:Number,
                 productQty:Number,
                 imageUrl:string
                 )
                 {
                   this.productName=productName
                   this.productPrice=productPrice
                   this.productQty=productQty
                   this.imageUrl=imageUrl
                 }

    getProductName():String
    {
          return this.productName
    }
    getProductPrice():Number
    {
           return this.productPrice
    }
    getProductQty():Number
    {
        return this.productQty
    }


    getProductImage(): string {
        return encodeURI(this.imageUrl+this.productName)
        //194.163.40.229:8088
    }
}
export class ProductCategoriesParser implements  ProductCatelogDate
{
    private category: String
    private shopName: String 
    private imageUrl:string
    constructor(   name: String,
                   brand: String,
                   imageUrl:string
               )
    
    {
       this.category=name;
       this.shopName=brand;
       this.imageUrl=imageUrl
   
    }
    
    getCategory(): String {
        return this.category
    }
    getShopName(): String {
        return this.shopName
    }

   
      
    getImage(): String {
        return encodeURI(this.imageUrl+"main")
        
    }

   
}