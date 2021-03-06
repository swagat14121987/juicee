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
// Angular resources
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
//Custom resources
var app_component_1 = require('../components/app.component');
var guide_component_1 = require('../components/guide.component');
var menu_component_1 = require('../components/menu.component');
var fa_component_1 = require('../components/fa.component');
var app_route_1 = require('../routing/app.route');
var fetchmenu_service_1 = require('../services/fetchmenu.service');
var flex_directive_1 = require('../directives/flex.directive');
var angular2_fontawesome_1 = require('angular2-fontawesome/angular2-fontawesome');
// import {FaComponent} from 'angular2-fontawesome/src/components/fa.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                angular2_fontawesome_1.Angular2FontawesomeModule,
                material_1.MaterialModule.forRoot(),
                app_route_1.routing
            ],
            declarations: [fa_component_1.FaComponent, app_component_1.AppComponent, guide_component_1.GuideComponent, menu_component_1.MenuComponent,
                flex_directive_1.FlexDirective],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: 'Menu', useClass: fetchmenu_service_1.FetchMenuService }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map