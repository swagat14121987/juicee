// Angular resources
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

//Custom resources
import {AppComponent} from '../components/app.component';
import {GuideComponent} from '../components/guide.component';
import {MenuComponent} from '../components/menu.component';
import {MenuItemComponent} from '../components/menuitem.component';
import {FaComponent} from '../components/fa.component';
import {routing} from '../routing/app.route';
import {FetchMenuService} from '../services/fetchmenu.service';
import {FlexDirective} from '../directives/flex.directive';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';
// import {FaComponent} from 'angular2-fontawesome/src/components/fa.component';

@NgModule({
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [ FaComponent, AppComponent, GuideComponent, MenuComponent,
    FlexDirective ],
  bootstrap: [ AppComponent ],
  providers: [{provide:'Menu', useClass:FetchMenuService}]
})
export class AppModule { }
