import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map , retry} from 'rxjs/operators';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseURL = "http://localhost:8080/api/v1/people";

   // injetando o HttpClient
   constructor(private httpClient: HttpClient) { }

   // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPeopleList(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(`${this.baseURL}`)
    .pipe(
      retry(2),
      catchError(this.handleError('getPersonList', []))
    );
  }

  getPersonById(idPerson: number): Observable<Person>{
    return this.httpClient.get<Person>(`${this.baseURL}/${idPerson}`);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
