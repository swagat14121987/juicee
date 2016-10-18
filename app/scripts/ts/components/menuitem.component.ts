import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../model/menuitem.model';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'juicee-menu-item',
  templateUrl: 'app/partials/menuitem.html'
})

export class MenuItemComponent {
    @Input() item:MenuItem;
    @Output() AddCart: EventEmitter<Cart> = new EventEmitter<Cart>();
    @Output() RemoveCart: EventEmitter<Cart> = new EventEmitter<Cart>();
    shoptoggle(event,data) {
      if(data.shop) {
        data.shop = false;
        this.RemoveCart.emit(data);
      }
      else {
        data.shop = true;
        this.AddCart.emit(data);
      }
    }
}
