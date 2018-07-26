import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {
team;
descriptions = [
  {team:'France', description:"Un champion solide", img:'./assets/imgs/champions.jpeg'},
  {team:'Brazil', description:"Enorme talent, mais aussi, enorme deception", img:'./assets/imgs/pleur.jpeg'},
  {team:'Belgium', description:"Si proche de l'histoire..", img:'./assets/imgs/defeat_belgium.jpg'}
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const id = this.navParams.get('id');
    this.team = this.descriptions.find(t => t.team === id.team);
  }

  ionViewDidLoad() {

  }

}
