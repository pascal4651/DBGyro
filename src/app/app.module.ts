import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DbmeterPage } from '../pages/dbmeter/dbmeter';
import { GyroPage } from '../pages/gyro/gyro';
import { SavingsPage } from '../pages/savings/savings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDup6SJ6ykvA14YGhSPqoagV9kHVbbJu8g",
  authDomain: "ionicss-9e4ce.firebaseapp.com",
  databaseURL: "https://ionicss-9e4ce.firebaseio.com",
  projectId: "ionicss-9e4ce",
  storageBucket: "ionicss-9e4ce.appspot.com",
  messagingSenderId: "483305779242"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DbmeterPage,
    GyroPage,
    SavingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DbmeterPage,
    GyroPage,
    SavingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
