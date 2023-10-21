import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryItemsService {

    
  private url:String="http://localhost:4200/api/v1/product/"
  //"http://194.163.40.229:8088/api/v1/product/image/biryani/costal/"+this.productName
  
 
   constructor(private http:HttpClient) { }    
                         
      
  
   getProductAll( shopName:String,
                  category:String
                ) 
       {
         let path:string=""+this.url+category+"/"+shopName as string;
         console.log(path)
         console.log(path)
             return this.http
                         .get(encodeURI(path))
                         .pipe( catchError(this.handleError) );
       }

       getCategories(shopName:String) 
       {

            let path:string=""+this.url+"filter/"+shopName as string
             return this.http
                         .get(encodeURI(encodeURI(path)))
                         .pipe( catchError(this.handleError) );
       }

       getImage( shopName:String,
                 category:String
              )
       {
         let path:string=""+this.url+"image/"+category+"/"+shopName+"/"
         return path
       }
    
        


   private handleError(error: HttpErrorResponse)
    {
          if (error.status === 0) 
          {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error);
          } else {
                    // The backend returned an unsuccessful response code.
                  // The response body may contain clues as to what went wrong.
                       console.error(`Backend returned code ${error.status}, body was: `,
                                      error.error);
                 }



// Return an observable with a user-facing error message.

return throwError(  
                    () => new Error('Something bad happened; please try again later.')
                 );


}





}
