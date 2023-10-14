import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatelogService {

  private url:string="http://localhost:4200/api/v1/product/all"
 
   constructor(private http:HttpClient) { }    
                         
      
  
   getProductALl() 
       {
             return this.http
                         .get(this.url)
                         .pipe( catchError(this.handleError) );
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
