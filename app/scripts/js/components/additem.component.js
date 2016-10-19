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
var core_1 = require('@angular/core');
var menu_data_1 = require('../data/menu.data');
var AddItemComponent = (function () {
    function AddItemComponent() {
        this.NewItem = {
            id: 14,
            name: "",
            image: 'app/images/juice.png',
            shop: false,
            desc: ""
        };
    }
    AddItemComponent.prototype.addItem = function (title, desc) {
        this.NewItem.name = title;
        this.NewItem.desc = desc;
        menu_data_1.Menu.push(this.NewItem);
        // this.router.navigate('./juicee');
        console.log(menu_data_1.Menu);
    };
    AddItemComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/partials/additem.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AddItemComponent);
    return AddItemComponent;
}());
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=additem.component.js.map