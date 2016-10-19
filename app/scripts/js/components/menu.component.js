"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var MenuComponent = (function () {
    function MenuComponent(Menu) {
        this.Menu = Menu;
        this.OrderCart = {
            orderId: 'JUC001',
            items: []
        };
        this.NewItem = {
            id: 0,
            name: "",
            image: 'app/images/juice.png',
            shop: false,
            desc: ""
        };
    }
    MenuComponent.prototype.addItem = function (title, desc) {
        this.NewItem.name = title;
        this.NewItem.desc = desc;
        this.Menu.Menu.push(this.NewItem);
        console.log(this.Menu);
    };
    MenuComponent.prototype.onAddCart = function (data) {
        this.OrderCart.items.push(data);
    };
    MenuComponent.prototype.onRemoveCart = function (data) {
        for (var index = 0; index < this.OrderCart.items.length; index++) {
            if (data.id == this.OrderCart.items[index].id) {
                this.OrderCart.items.splice(index, 1);
            }
        }
    };
    MenuComponent = __decorate([
        core_1.Component({
            // selector: 'juicee-menu',
            templateUrl: 'app/partials/menu.html',
            styleUrls: ['node_modules/font-awesome/css/font-awesome.css'],
        }),
        __param(0, core_1.Inject('Menu')), 
        __metadata('design:paramtypes', [Array])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map