// Angular resources
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

//Custom resources
import {AppComponent} from '../components/app.component';
import {GuideComponent} from '../components/guide.component';
import {MenuComponent} from '../components/menu.component';
import {MenuItemComponent} from '../components/menuitem.component';
import {AddItemComponent} from '../components/additem.component';
import {routing} from '../routing/app.route';
import {FetchMenuService} from '../services/fetchmenu.service';
import {FlexDirective} from '../directives/flex.directive';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [ AppComponent, GuideComponent, MenuComponent, MenuItemComponent,
    FlexDirective, AddItemComponent ],
  bootstrap: [ AppComponent ],
  providers: [{provide:'Menu', useClass:FetchMenuService}]
})
export class AppModule { }
