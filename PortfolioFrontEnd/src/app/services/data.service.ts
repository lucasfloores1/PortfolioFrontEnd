import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../Education'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl : string = 'http://localhost:5000/education'

  constructor( private http: HttpClient) { }

  getEducation(): Observable<Education[]>{
     return this.http.get<Education[]>(this.apiUrl);
  }

}

