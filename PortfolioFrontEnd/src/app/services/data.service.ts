import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../Education'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  
  private apiUrl : string = 'http://localhost:5000/education'

  constructor( private http: HttpClient) { }

  getEducation(): Observable<Education[]>{
     return this.http.get<Education[]>(this.apiUrl);
  }

  deleteEducation( education : Education ): Observable<Education> {

    const url : string = `${this.apiUrl}/${education.id}`

    console.log(url)

    return this.http.delete<Education>(url);
  }

  addEducation(education : Education): Observable<Education>{
     return this.http.post<Education>(this.apiUrl, education, httpOptions)
  }

  editEducation(education : Education): Observable<Education>{
    
    const url : string = `${this.apiUrl}/${education.id}`

    console.log(education)

    return this.http.put<Education>(url, education, httpOptions)
  }

}

