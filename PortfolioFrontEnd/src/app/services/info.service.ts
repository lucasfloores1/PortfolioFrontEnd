import { Injectable } from '@angular/core';
import { Info } from '../Info';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl : string = 'http://localhost:5000/info'

  constructor(private http : HttpClient) { }

  getInfo(): Observable<Info[]>{
    return this.http.get<Info[]>(this.apiUrl)
  }
}
