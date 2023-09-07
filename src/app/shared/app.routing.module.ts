import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { EarphonesComponent } from "./components/earphones/earphones.component";
import { HeadphonesComponent } from "./components/headphones/headphones.component";
import { IpodsComponent } from "./components/ipods/ipods.component";
import { PhonesComponent } from "./components/phones/phones.component";
import { HeadphoneComponent } from "./components/headphones/headphone/headphone.component";
import { PhoneComponent } from "./components/phones/phone/phone.component";
import { EarphonComponent } from "./components/earphones/earphon/earphon.component";
import { IpodComponent } from "./components/ipods/ipod/ipod.component";




const routes : Routes =[
    {
      path : '',component : DashboardComponent //localhost:4200/home
    },
    {
      path : 'home',component : DashboardComponent //localhost:4200/home
    },
    {
      path : 'earphones',component : EarphonesComponent //localhost:4200/users
    },
    {
        path : 'earphones/:earid',component : EarphonComponent //localhost:4200/users
    },

    {
      path : 'headphones',component : HeadphonesComponent //localhost:4200/products
    },
    {
      path : 'headphones/:HeadId',component : HeadphoneComponent //localhost:4200/products
    },
    {
        path : 'ipods',component : IpodsComponent //localhost:4200/products
    },
     {
        path : 'ipods/:ipodId',component : IpodComponent //localhost:4200/products
    },
    {
        path : 'phones',component : PhonesComponent //localhost:4200/products
    },
    {
        path : 'phones/:moId',component : PhoneComponent //localhost:4200/products
    },

  ]

  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [
     
    ]
  })
  export class AppRoutingModule { }
  