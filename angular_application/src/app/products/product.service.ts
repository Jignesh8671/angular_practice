import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Iproduct } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private productUrl = '';

  getProducts(): Observable<Iproduct[]> {
    return this.http
      .get<Iproduct[]>(this.productUrl)
      .pipe(tap((data) => console.log('All:', JSON.stringify(data))),catchError(this.handleErrors));

  }

 private  handleErrors(err: HttpErrorResponse){
        let errorMessage = " ";
        if(err.error instanceof ErrorEvent){
                errorMessage ='an error is occured : ${err.error.message}';
        } else {
                errorMessage  = 'server returned code : ${err.status} , error message is :${err.message}';
        }
        console.error(errorMessage);
        return throwError(()=> errorMessage);

  }
}
