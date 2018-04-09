import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbmeterPage } from '../dbmeter/dbmeter';
import { GyroPage } from '../gyro/gyro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /*
  itemTapped(event, item) {
    this.navCtrl.push(DbmeterPage, {
      item: item
    });
  }*/

  dbmeterClick(){
    this.navCtrl.push(DbmeterPage);
  }

  gyroClick(){
    this.navCtrl.push(GyroPage);
  }
}
