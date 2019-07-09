import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewItemComponent} from './new-item/new-item.component';
import {StoreComponent} from './store/store.component';
import {ItemCardComponent} from './item-card/item-card.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'new-item', component: NewItemComponent},
  { path: 'welcome', component: HomePageComponent},
  { path: 'store', component: StoreComponent},
  { path: 'card', component: ItemCardComponent},
  { path: 'details/:id', component: ItemDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
