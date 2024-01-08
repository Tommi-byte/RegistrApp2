import { Component, OnInit, ElementRef, ViewChildren, QueryList, ɵɵdeferPrefetchOnViewport, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage   {
  public usuario = '';
  isModalOpen = false;

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;

  private animation!:Animation; 

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public alertController: AlertController, private animationCtrl: AnimationController) {
    this.activatedRoute.queryParams.subscribe(params => {//utilizo lambda
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuario = this.router.getCurrentNavigation()?.extras.state?.["usuario"];
        console.log(this.usuario)
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }


  ngAfterViewInit(){

    const cardD = this.animationCtrl
    .create()
    .addElement(this.card.nativeElement)
    .duration(1500)
    .iterations(Infinity)
    .direction('alternate')
    .fromTo('background','lightblue','var(--background)');

    this.animation=this.animationCtrl
    .create()
    .duration(2000)
    .iterations(Infinity)
    .addAnimation([cardD]);

    this.animation.play();
  }


  cerrarSesion() {
    this.usuario = "";
    this.presentAlert("Cerrar Sesión", "¿Estas seguro?");
  }

  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.usuario = '';
            this.router.navigate(['/login']);
          },
        },
      ],
    });
    await alert.present();
  }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  


}
