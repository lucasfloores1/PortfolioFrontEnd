import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private apiUrl : string = 'https://portfoliobackend-ea3r.onrender.com/project'

  constructor( private http : HttpClient ) { 

  }

  loadProject(): Observable<Project[]>{
    return this.http.get<Project[]>( `${this.apiUrl}/load` )
  }

  deleteProject(project : Project) : Observable<Project>{
    
    const url : string = `${this.apiUrl}/delete/${project.id}`

    return this.http.delete<Project>( url )
  }

  updateProject(project : Project) : Observable<Project>{
    
    const url : string = `${this.apiUrl}/update/${project.id}`

    return this.http.put<Project>( url , project , httpOptions )

  }

  createProject (project : Project) : Observable <Project>{
    
    const url : string = `${this.apiUrl}/create`
    
    return this.http.post<Project>( url , project , httpOptions )
  }


}
