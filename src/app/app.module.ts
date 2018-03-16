import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';

import { HttpModule } from '@angular/http';
import { baseURL } from '../shared/baseurl';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL }
  ]
})
export class AppModule {}
