import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { NewItemComponent } from './new-item/new-item.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ItemCardComponent } from './item-card/item-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,BrowserAnimationsModule,ToastModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
