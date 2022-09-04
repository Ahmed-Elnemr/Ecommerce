import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { UsdToEgpPipe } from './Pipes/usd-to-egp.pipe';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { ProductCardDirective } from './Directives/product-card.directive';
import { NationalIDPipe } from './Pipes/national-id.pipe';
import { CreditCardNumberPipe } from './Pipes/credit-card-number.pipe';
import { OrederMasterComponent } from './Components/oreder-master/oreder-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    UsdToEgpPipe,
    BorderBoxDirective,
    ProductCardDirective,
    NationalIDPipe,
    CreditCardNumberPipe,
    OrederMasterComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AboutUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
