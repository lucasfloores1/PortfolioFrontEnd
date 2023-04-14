import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddEducation : boolean = false;
  private subject = new Subject<any>();
  private showEditEducation : boolean = false;

  constructor() { }

  toggleAddEducation():void{
    this.showAddEducation = !this.showAddEducation
    this.subject.next(this.showAddEducation)
  }

  onToggleAdd():Observable<any>{
    return this.subject.asObservable();
  }

  onToggleEdit():Observable<any>{
    return this.subject.asObservable();
  }

  toggleEditEducation():void{
    this.showEditEducation = !this.showEditEducation
    this.subject.next(this.showEditEducation)
  }
}
