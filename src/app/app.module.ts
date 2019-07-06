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
import { HomePageComponent } from './home-page/home-page.component';
import {MatButtonModule,MatMenuModule,MatIconModule,MatSidenavModule,MatButton,MatFormFieldModule,MatOptionModule,MatSelectModule,MatSelectionList,
MatListModule
} from '@angular/material';
import { StoreComponent } from './store/store.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ItemCardComponent,
    HomePageComponent,
    StoreComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,BrowserAnimationsModule,ToastModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,MatMenuModule,MatIconModule,MatSidenavModule,MatFormFieldModule,MatOptionModule,MatSelectModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
