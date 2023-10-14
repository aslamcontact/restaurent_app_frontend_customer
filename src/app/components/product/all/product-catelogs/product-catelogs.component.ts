import { Component } from '@angular/core';
import { ProductCatelogParser } from 'src/app/services/api/product/catelog-api-parser';
import { CatelogService } from 'src/app/services/api/product/catelog.service';

@Component({
  selector: 'app-product-catelogs',
  templateUrl: './product-catelogs.component.html',
  styleUrls: ['./product-catelogs.component.css']
})
export class ProductCatelogsComponent {

  title = 'product_catelogs';
  errorMessage:String=''
  allProducts: any[]=[];
  test:String='';
  apiRequest:any={  next:(response:any) =>this.apiPocessing(response),                                                                      
                    error:(error:any) =>this.apiErrorProcessing(error),
                    complete:()=>this.apiComplete()
                 }




  constructor(private productApi:CatelogService)  {}
                         
                                         

  ngOnInit()
      {                                                                        
         this.productApi
             .getProductALl()
             .subscribe(this.apiRequest)                                                           
                   
      }
                   



  private apiPocessing(response:any)
    {
       console.log(response)
       response
         .forEach(
                   (product:any)=>
                       {
                          this.allProducts
                              .push( new ProductCatelogParser( product.name,
                                                               product.brand,
                                                               product.descriptions,
                                                               product.about,
                                                               product.quantity,
                                                               product.price
                                                             )
                                    )

                         }
                   )
                         

}
                        
  private apiErrorProcessing(exception:any)
     {
          this.errorMessage=exception;
     }     



  private apiComplete()
    {
      this.allProducts
          .forEach( (product)=>
                      {
                         this.test+=product.name+""+JSON.stringify(product.about)
                      }
                  )
       console.log(this.allProducts)

    }


    


}
