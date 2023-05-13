import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../Skills';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
 
  private apiUrl : string = 'https://portfoliobackend-ea3r.onrender.com/skills'

  constructor( private http : HttpClient ) { 

  }

  loadSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>( `${this.apiUrl}/load` )
  }

  deleteSkills(skills : Skills) : Observable<Skills>{
    
    const url : string = `${this.apiUrl}/delete/${skills.id}`

    return this.http.delete<Skills>( url )
  }

  updateSkills(skills : Skills) : Observable<Skills>{
    
    const url : string = `${this.apiUrl}/update/${skills.id}`

    return this.http.put<Skills>( url , skills , httpOptions )

  }

  createSkills (skills : Skills) : Observable <Skills>{
    
    const url : string = `${this.apiUrl}/create`
    
    return this.http.post<Skills>( url , skills , httpOptions )
  }
}
