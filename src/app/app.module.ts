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
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {WelcomeComponent} from './pages/welcome/welcome.component'
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ItemCardComponent,
    HomePageComponent,
    StoreComponent,
    ItemDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,BrowserAnimationsModule,ToastModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,MatMenuModule,MatIconModule,MatSidenavModule,MatFormFieldModule,MatOptionModule,MatSelectModule,MatListModule, IconsProviderModule,
    NgZorroAntdModule, HttpClientModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
