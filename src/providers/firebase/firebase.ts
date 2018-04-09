//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd:AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getDataList() {
    return this.afd.list('/dataList/');
  }
 
  addItem(name) {
    this.afd.list('/dataList/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/dataList/').remove(id);
  }
}
