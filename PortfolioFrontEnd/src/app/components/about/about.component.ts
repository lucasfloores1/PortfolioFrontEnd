import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutEditComponent } from '../about-edit/about-edit.component';
import { AuthorizationService } from 'src/app/services/authorization.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

  showEdit : boolean = false

  aboutText : string = 'Desarrolador web full stack jr. dando sus primeros pasos y buscando su primer trabajo en IT';

  constructor( public authService : AuthorizationService ,public dialog : MatDialog ){

  }

  ngOnInit(  ): void {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )
    
  }

  openDialog(){

    const dialogRef = this.dialog.open(AboutEditComponent,{

      width: '1000px',
      data: this.aboutText,
      disableClose : true,
      enterAnimationDuration : 350,

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){ this.aboutText = result }
      });
  }

}
