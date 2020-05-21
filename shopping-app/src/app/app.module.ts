import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListingComponent } from './components/home/product-listing/product-listing.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FooterComponent } from './components/footer/footer.component';
import { FinalComponent } from './components/final/final.component';
import { CartComponent } from './components/cart/cart.component';
import { SectionTwoComponent } from './components/cart/section-two/section-two.component';
import { SectionThreeComponent } from './components/cart/section-three/section-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListingComponent,
    HomeComponent,
    ProductDescriptionComponent,
    FooterComponent,
    FinalComponent,
    CartComponent,
    SectionTwoComponent,
    SectionThreeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
