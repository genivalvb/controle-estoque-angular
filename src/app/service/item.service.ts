import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map , retry} from 'rxjs/operators';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURL = "http://localhost:8080/api/v1/items/list";
  private baseURL2 = "http://localhost:8080/api/v1/items";

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getItemsList(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseURL}`)
      .pipe(
        retry(2),
        catchError(this.handleError('getItemsList', []))
        );
  }

  getItemById(idItem: number): Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseURL}/${idItem}`);
  }

  createItem(item: Item): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`,item);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
