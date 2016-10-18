// Angular resources
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


//Custom resources
import {FaComponent} from '../components/fa.component';
import {routing} from '../routing/app.route';
// import {FaComponent} from 'angular2-fontawesome/src/components/fa.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ FaComponent ],
  bootstrap: [ FaComponent ]
})
export class NavigationModule { }
