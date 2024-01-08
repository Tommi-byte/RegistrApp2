import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario : string;
  public password : string;
  public showPassword : boolean;
  public cargando : boolean;

  constructor(public router:Router) { 
    this.usuario = '';
    this.password = '';
    this.showPassword = false;
    this.cargando = false;
  }

  ngOnInit() {
  }

  revela() : boolean {
    this.showPassword = !this.showPassword;
    return this.showPassword;
  }

  validaCampo() : boolean {

    if(this.cargando){
      return true;
    }

    return !(this.usuario && this.password);
  }

  iniciarSesion(){
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
      let navigationextras: NavigationExtras={
        state:{
          usuario: this.usuario //al state le asigno el modelo con clave y valor
        }
      }
      this.router.navigate(['/home'],navigationextras);
      
    }, 3000);
  }
  

}
