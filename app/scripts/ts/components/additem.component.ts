import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../model/menuitem.model';
import { Menu } from '../data/menu.data';

@Component({
  templateUrl: 'app/partials/additem.html',
})

export class AddItemComponent {
    NewItem:MenuItem = {
      id: 14,
      name: "",
      image: 'app/images/juice.png',
      shop: false,
      desc: ""
    }
    addItem(title,desc) {
      this.NewItem.name = title;
      this.NewItem.desc = desc;
      Menu.push(this.NewItem);
      // this.router.navigate('./juicee');
      console.log(Menu);
    }
}
