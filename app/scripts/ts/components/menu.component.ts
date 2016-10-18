import { Component, Inject, Input } from '@angular/core';
import { Cart } from '../model/cart.model';
import { MenuItem } from '../model/menuitem.model';
import { MenuItemComponent } from '../components/menuitem.component';

@Component({
  // selector: 'juicee-menu',
  templateUrl: 'app/partials/menu.html',
  styleUrls: ['node_modules/font-awesome/css/font-awesome.css'],
})

export class MenuComponent {
    OrderCart:Cart = {
      orderId:'JUC001',
      items:[]
    };
    onAddCart(data:MenuItem){
      this.OrderCart.items.push(data);
    }
    onRemoveCart(data:MenuItem){
      for(var index=0;index<this.OrderCart.items.length;index++)
      {
        if(data.id == this.OrderCart.items[index].id)
        {
          this.OrderCart.items.splice(index, 1);
        }
      }
    }
    constructor(@Inject('Menu') private Menu:MenuItem[]) {
    }
}
