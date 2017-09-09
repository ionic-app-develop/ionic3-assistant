import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {ItemCreatePage} from '../item-create/item-create';
import {ItemDetailPage} from '../item-detail/item-detail';

import {Items} from '../../providers/providers';
import {Item} from '../../models/item';


import {UserService} from '../../providers/mockService/user_service';
import {Utils} from '../../common/utils';

@Component({
  selector: 'page-tabs-todo',
  templateUrl: 'tabs-todo.html'
})
export class TodoPage {
  currentItems: Item[];
  obj_UserList = [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public userService: UserService) {
    this.currentItems = this.items.query();
    let now = new Date();
    console.log('now: ' + Utils.formatDate(now));
    this.queryUsers();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  queryUsers() {
    this.userService.getUsers().subscribe(
      users => {
        this.obj_UserList = <any>users;
        console.log('this.obj_UserList: ' + JSON.stringify(Utils.order(this.obj_UserList, 'userName', 'asc')));
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
