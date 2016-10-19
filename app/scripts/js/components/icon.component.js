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
var IconComponent = (function () {
    function IconComponent() {
        this.className = '';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IconComponent.prototype, "className", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "name", void 0);
    IconComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'icon',
            styleUrls: ['app/styles/icon.min.css'],
            template: "\n    <svg [attr.class]=\"'icon icon--' + name + ' ' + className\">\n      <use [attr.xlink:href]=\"'#icon-' + name\"></use>\n    </svg>\n    \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], IconComponent);
    return IconComponent;
}());
exports.IconComponent = IconComponent;
//# sourceMappingURL=icon.component.js.map