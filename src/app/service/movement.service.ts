import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map , retry} from 'rxjs/operators';
import { Movement } from '../model/movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private baseURL = "http://localhost:8080/api/v1/movements";

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getMovementsList(): Observable<Movement[]>{
    return this.httpClient.get<Movement[]>(`${this.baseURL}`)
      .pipe(
        retry(2),
        catchError(this.handleError('getMovementsList', []))
        );
  }

  getMovementById(idMovement: number): Observable<Movement>{
    return this.httpClient.get<Movement>(`${this.baseURL}/${idMovement}`);
  }

  createItem(movement: Movement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,movement);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
