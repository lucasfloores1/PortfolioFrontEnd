import { Injectable } from '@angular/core';
import { Info } from '../Info';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { info } from 'ngx-bootstrap-icons';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl : string = 'http://localhost:8080/info'

  constructor(private http : HttpClient) { }

  getInfo(): Observable<Info[]>{
    return this.http.get<Info[]>(`${this.apiUrl}/load`)
  }
}
