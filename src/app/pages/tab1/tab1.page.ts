import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController) {

  }
  async agregarLista() {
    //    this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertController.create({
      header: 'Agregar',
      subHeader: 'Escriba el pendiente a agregar ',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'nombre de la lista '
      }],
      buttons: [{
        text: 'Cancelar', role: 'cancel',
        handler: () => {
          console.log('cancelar');
        }
      },
      {
        text: 'crear',
        handler: (data) => {
          console.log(data);
          if (data.titulo.length === 0) {
            return;
          }
          this.deseosService.crearLista(data.titulo);
        }
      }
      ]
    });
    alert.present();
  }
}
