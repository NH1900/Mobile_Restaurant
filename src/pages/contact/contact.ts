import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private emailComposer: EmailComposer) {
  }

  sendEmail() {

    let email = {
      to: 'confusion@food.net',
      subject: '[ConFusion]: Query',
      body: 'Dear Sir/Madam:',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
