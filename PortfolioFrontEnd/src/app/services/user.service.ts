import { Injectable } from '@angular/core';
import { User } from '../User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl : string = 'https://portfoliobackend-ea3r.onrender.com/user'
  
  constructor( private http : HttpClient ) { }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/load/1`)
  }

  updateUser(user : User) : Observable<User>{
    
    const url : string = `${this.apiUrl}/update/${user.id}`

    return this.http.put<User>( url , user , httpOptions )

  }
}
