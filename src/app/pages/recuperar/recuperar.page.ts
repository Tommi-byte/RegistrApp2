import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  public usuario : string;
  public cargando: boolean;

  constructor(public alertController: AlertController) {

    this.usuario = "";
    this.cargando = false;
  }

  ngOnInit() {
  }

  validaCampo() : boolean {

    if(this.cargando){
      return true;
    }

    return !(this.usuario );
  }

  recuperar(){
    this.cargando = true;
    this.usuario = '';
    setTimeout(() => {
      this.cargando = false;
      this.presentAlert("Correo Enviado", "Se le ha enviado un correo con las instrucciones para recuperar su contraseña");
    }, 3000);
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,      
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
