import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EarphonesComponent } from './shared/components/earphones/earphones.component';
import { HeadphonesComponent } from './shared/components/headphones/headphones.component';
import { IpodsComponent } from './shared/components/ipods/ipods.component';
import { PhoneComponent } from './shared/components/phones/phone/phone.component';
import { AppRoutingModule } from './shared/app.routing.module';
import { EarphonComponent } from './shared/components/earphones/earphon/earphon.component';
import { HeadphoneComponent } from './shared/components/headphones/headphone/headphone.component';
import { IpodComponent } from './shared/components/ipods/ipod/ipod.component';
import { PhonesComponent } from './shared/components/phones/phones.component';
import { FooterComponent } from './shared/components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EarphonesComponent,
    EarphonComponent,
    HeadphonesComponent,
    HeadphoneComponent,
    IpodsComponent,
    IpodComponent,
    PhonesComponent,
    PhoneComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
