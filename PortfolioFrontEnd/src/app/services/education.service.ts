import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

export class EducationService {


  private apiUrl : string = 'https://portfoliobackend-ea3r.onrender.com/education'

  constructor( private http : HttpClient ) { }

  loadEducation(): Observable<Education[]>{

    return this.http.get<Education[]>( `${this.apiUrl}/load` );

  }

  createEducation ( education : Education ): Observable<Education>{

    return this.http.post<Education>( `${this.apiUrl}/create`, education, httpOptions );

  }

  deleteEducation ( education : Education ): Observable<Education>{

    const url : string = `${this.apiUrl}/delete/${education.id}`

    return this.http.delete<Education>( url );

  }

  updateEducation ( education : Education ) : Observable<Education>{

    const url : string = `${this.apiUrl}/update/${education.id}`

    return this.http.put<Education>( url , education , httpOptions )

  }
}
