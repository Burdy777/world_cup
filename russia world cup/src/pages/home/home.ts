import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = [
    {team:'France', title:'Grizou\'s gang', flag:'./assets/imgs/france.jpg' },
    {team:'Brazil', title:'Neymar & CO', flag:'./assets/imgs/bresil.jpg' },
    {team:'Belgium', title:'Hazard president!', flag:'./assets/imgs/belgique.png' }

  ];

  constructor(public navCtrl: NavController, public storage:Storage) {}

  pushViewDetail(img) {
    this.navCtrl.push(DetailsPage,{
      id: img
    });
  }
}
