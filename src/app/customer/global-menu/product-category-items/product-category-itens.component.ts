import { Component,Input } from '@angular/core';
import { ProductCategoryItemsService } from 'src/app/services/customer/global-menu/product-category-items.service';
import { ProductCategoriesParser,ProductsParser } from 'src/app/services/customer/global-menu/catelog-api-parser';
@Component({
  selector: 'app-product-category-itens',
  templateUrl: './product-category-itens.component.html',
  styleUrls: ['./product-category-itens.component.css']
})
export class ProductCategoryItensComponent {

  @Input() shopName:String="";
  private imageUrl=''
  
  isProductApiComplete:boolean=true;
  isCategoryApiComplete:boolean=false;
  categories:ProductCategoriesParser[]=[]
  errorMessage:String=''
  allProducts: ProductsParser[]=[]
  productApiReq:any={  next:(response:any) =>this.apiProductPocessing(response),                                                                      
                       error:(error:any) =>this.apiProductErrorProcessing(error),
                       complete:()=>this.apiProductComplete()
                     }

  categorriesApiReq:any={  next:(response:any) =>this.apiCategoryProcess(response),                                                                      
                        error:(error:any) =>this.apiCategoryErrorProcessing(error),
                        complete:()=>this.apiCategoryComplete()
                      }


  constructor(private productApiService:ProductCategoryItemsService )  {}
                         
                                         

  ngOnInit()
      {       
        this.shopName="aslamres"                                                                                                                                  
             this.productApiService
             .getCategories(this.shopName)
             .subscribe(this.categorriesApiReq)
              
             
          
             
      }
                   
      getProducts(category:String)
      {
        console.log("--------------------"+category+"------------")
        this.allProducts=[]
        this.productApiService
        .getProductAll(this.shopName,category)
        .subscribe(this.productApiReq)
        
      }
      getImageMain(category:String):string
      {
         
         let imgUrl= this.productApiService.getImage(this.shopName,category)+"main"     
         return imgUrl
            
      }
  
  







  private apiProductPocessing(response:any)
    {
       this.isProductApiComplete=false
      let  url=this.productApiService.getImage(this.shopName,response.name)
        
      response
        .categories
        .forEach((product:any)=>this.allProducts
                                    .push(new ProductsParser( product.value,
                                                              product.price,
                                                              product.quantity,
                                                              url)
                                         ))
                                          
                      
                                        
                                
       
}
                        
  private apiProductErrorProcessing(exception:any)
     {
          this.errorMessage=exception;
     }     



  private apiProductComplete()
    {
      
      this.isProductApiComplete=true
          

    }



    private apiCategoryProcess(response:any)
    {
       this.isCategoryApiComplete=false
       
      response.forEach( (product:any)=>
                         {
                           
                          let  url=this.productApiService.getImage(this.shopName,product.name)
                          this.categories
                               .push(new ProductCategoriesParser( product.name,
                                                                  product.brand,
                                                                  url));

                                                                  

                                                                
                         }
                      )

                      if(this.categories.length>0)
                      this.getProducts(this.categories[0].getCategory())


     }
                        
  private apiCategoryErrorProcessing(exception:any)
     {
          this.errorMessage=exception;
     }     

  private apiCategoryComplete()
    {
      
      this.isCategoryApiComplete=true
        

    }

    




}
