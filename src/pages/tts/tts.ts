import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import * as moment from 'moment';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';


/**
 * Generated class for the TtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tts',
  templateUrl: 'tts.html',
  providers: [TextToSpeech]
})
export class TtsPage {
  private timer:any;
  ttsString:string;
  myDate = '';
  newItem : {
    Datetime:string,
    Type:string,
    Data:string,
    Discription:string,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private tts: TextToSpeech,
    public firebaseProvider: FirebaseProvider,private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TtsPage');

    this.timer = setInterval(() => {
      let now = moment();
      this.myDate = moment(now.format(), moment.ISO_8601).format();
      //this.myDate = new Date().toISOString();

      //this.level = this.currentAmplitude | 0
    }, 500);
    
  }
ttsStart()
{
  this.tts.speak(this.ttsString)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
}
ttsStartogGem()
{
  this.tts.speak(this.ttsString)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
    this.newItem = {
      Datetime: this.myDate,
      Type : "Tts",
      Data: this.ttsString,
      Discription: "tts brugt",
      
      
    }
    this.firebaseProvider.addItem(this.newItem);
    this.ttsString='';
    this.toastController.create({
      message: 'Data is saved',
      duration: 2000
    }).present();
}
}
