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
var IconButtonComponent = (function () {
    function IconButtonComponent() {
        this.onClick = new core_1.EventEmitter(false);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IconButtonComponent.prototype, "className", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IconButtonComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IconButtonComponent.prototype, "label", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], IconButtonComponent.prototype, "onClick", void 0);
    IconButtonComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'icon-button',
            styleUrls: ['app/styles/icon-button.min.css'],
            template: "\n    <button\n      [attr.aria-label]=\"label\"\n      class=\"btn btn--icon btn--{{icon}} {{className}}\"\n      (click)=\"onClick.emit($event)\"\n      type=\"button\">\n      <icon [name]=\"icon\"></icon>\n    </button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], IconButtonComponent);
    return IconButtonComponent;
}());
exports.IconButtonComponent = IconButtonComponent;
//# sourceMappingURL=iconbutton.component.js.map