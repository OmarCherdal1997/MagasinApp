import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import {StoreComponent} from '../../store/store.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '/store', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
