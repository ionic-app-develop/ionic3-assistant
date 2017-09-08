import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@Component({
  selector: 'page-tabs-my',
  templateUrl: 'tabs-my.html'
})
export class MyPage {
  // Our local settings object
  name:any='';
  profilePic: any='';

  // page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService) {
    this.init();
  }

  init() {
    this.name = '张三';
    this.profilePic = 'assets/img/ian-avatar.png';
  }


  ionViewWillEnter() {
    // this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }

  out() {
    // this.navCtrl.pop();
  }
}
