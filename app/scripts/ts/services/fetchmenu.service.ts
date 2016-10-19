import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menuitem.model';
import { Menu } from '../data/menu.data';
import { Http, Response } from '@angular/http';

@Injectable()
export class FetchMenuService {
    Menu:MenuItem[];

    constructor() {
        this.Menu = Menu;
    }
}
