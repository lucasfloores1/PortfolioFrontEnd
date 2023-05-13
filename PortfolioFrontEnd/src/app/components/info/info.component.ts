import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/User';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UserService } from 'src/app/services/user.service';
import { InfoEditComponent } from '../info-edit/info-edit.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  showEdit : boolean = this.authService.getIsLoggedIn()

  information : User

  constructor( private authService : AuthorizationService,public dialog : MatDialog ,private userService : UserService , private cdr: ChangeDetectorRef){ 
    
  }

  ngOnInit () : void{

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )

    this.userService.getUser().subscribe((response) => {
      this.information = response;
      this.cdr.detectChanges();
    })
  }

  openDialog(){

    const dialogRef = this.dialog.open(InfoEditComponent,{

      width: '1000px',
      data: this.information,
      disableClose : true,
      enterAnimationDuration : 350,

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){ 
        this.userService.updateUser(result).subscribe( response => {
          this.information.name = response.name
          this.information.title = response.title
          this.information.pfpurl = response.pfpurl
          this.information.bannerurl = response.bannerurl
        })
      }
    });
  }


}