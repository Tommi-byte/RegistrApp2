import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email : string;
  public password : string;
  public showPassword : boolean;

  constructor() { 
    this.email = '';
    this.password = '';
    this.showPassword = false;
  }

  ngOnInit() {
  }

  revela() : boolean {
    this.showPassword = !this.showPassword;
    return this.showPassword;
  }

  validaCampo() : boolean {
    return !(this.email && this.password);
  }
  

}
