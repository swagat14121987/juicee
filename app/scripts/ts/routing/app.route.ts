import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from '../components/guide.component';
import { MenuComponent } from '../components/menu.component';
import { AppComponent } from '../components/app.component';
import { FaComponent } from '../components/fa.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MenuComponent
    },
    {
        path: 'juicee',
        component: MenuComponent
    },
    {
        path: 'guide',
        component: GuideComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
