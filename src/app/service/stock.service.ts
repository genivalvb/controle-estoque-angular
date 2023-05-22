import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map , retry} from 'rxjs/operators';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL = "http://localhost:8080/api/v1/stock";
  
  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getStocksList(): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseURL}/list`)
      .pipe(
        retry(2),
        catchError(this.handleError('getStocksList', []))
        );
  }

  getStockById(idStock: number): Observable<Stock>{
    return this.httpClient.get<Stock>(`${this.baseURL}/${idStock}`);
  }

  createStock(stock: Stock): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,stock);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
