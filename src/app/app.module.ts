import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CoverComponent } from './cover/cover.component';
import { IntroShopComponent } from './intro-shop/intro-shop.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';

import { ShopComponent } from './shop/shop.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { RegisterComponent } from './item-preview/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ItemsService } from './services/items.service';
import { Database } from './database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoverComponent,
    IntroShopComponent,
    ContactFormComponent,
    AboutComponent,
    ShopComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    ItemPreviewComponent,
    SocialBarComponent,
    LoginComponent,
    SignupComponent,
    CheckoutFormComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    
  ],
  providers: [ItemsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
