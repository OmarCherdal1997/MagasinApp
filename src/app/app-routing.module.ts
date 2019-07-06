import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component"
import {NewItemComponent} from './new-item/new-item.component';
import {StoreComponent} from './store/store.component';
import {ItemDetailComponent} from './item-detail/item-detail.component'

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'new-item', component: NewItemComponent }, 
{path: 'store', component: StoreComponent },
{path: 'details/:id', component: ItemDetailComponent },
{path:'***',redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
