import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component"
import {NewItemComponent} from './new-item/new-item.component';
import {StoreComponent} from './store/store.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'new-item', component: NewItemComponent },
{path: 'store', component: StoreComponent },
{path:'***',redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
