import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContentsComponent } from './contents/contents.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },

    {
        path:"About",
        component:AboutComponent
    },

    {
        path:"Products",
        component:ProductsComponent
    },
    
    {
        path:"Contents",
        component:ContentsComponent
    }


];
