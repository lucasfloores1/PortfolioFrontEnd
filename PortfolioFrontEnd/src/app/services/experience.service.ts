import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../Experience';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {


  private apiUrl : string = 'https://portfoliobackend-ea3r.onrender.com/experience'

  constructor( private http : HttpClient ) { 

  }

  loadExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>( `${this.apiUrl}/load` )
  }

  deleteExperience(experience : Experience) : Observable<Experience>{
    
    const url : string = `${this.apiUrl}/delete/${experience.id}`

    return this.http.delete<Experience>( url )
  }

  updateExperience(experience : Experience) : Observable<Experience>{
    
    const url : string = `${this.apiUrl}/update/${experience.id}`

    return this.http.put<Experience>( url , experience , httpOptions )

  }

  createExperience (experience : Experience) : Observable <Experience>{
    
    const url : string = `${this.apiUrl}/create`
    
    return this.http.post<Experience>( url , experience , httpOptions )
  }
}
