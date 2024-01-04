import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  public email : string;

  constructor() {

    this.email = "";
  }

  ngOnInit() {
  }

  validaCampo() : boolean {
    return !(this.email );
  }

}
