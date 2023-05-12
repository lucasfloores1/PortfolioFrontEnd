import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { User } from 'src/app/User';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 

  user : User = { id : 0 , username:'', password : '' }

  admin : User = { id : 0 , username:'', password : '' }

  constructor( private login_snackbar : MatSnackBar,public authServ : AuthorizationService ,public dialogRef: MatDialogRef<LoginComponent>){}

  
  ngOnInit(){
    this.authServ.getAdmin().subscribe( response => {this.admin = response})
    
  }


  verifyUser(){

    if( (this.user.password === this.admin.password) && (this.user.username === this.admin.username) ){

      this.authServ.login();
      this.dialogRef.close();
      this.login_snackbar.open( "Sesión Iniciada con éxito!!!", "X",{ duration: 4000 } )

    }
    else {
      this.login_snackbar.open("Usuario y contraseña Incorrectos", "X",{ duration: 4000 })
      
    }
  }

  authLogin(): void {
    this.dialogRef.close()
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
