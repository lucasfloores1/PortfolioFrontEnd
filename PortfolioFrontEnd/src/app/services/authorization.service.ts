import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private apiUrl : string = 'http://localhost:8080/admin'

  private isLoggedIn : boolean = false;

  private isLoggedInSubject : Subject<boolean> = new Subject<boolean>();

  constructor( private http : HttpClient ) { }

  getAdmin(): Observable<User>{

    return this.http.get<User>( `${this.apiUrl}/load/2` );

  }

  login(): void {
    this.isLoggedIn = true;
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.isLoggedIn = false;
    this.isLoggedInSubject.next(false);
    console.log(this.isLoggedIn)
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getIsLoggedInSubject(): Subject<boolean> {
    return this.isLoggedInSubject;
  }


}
