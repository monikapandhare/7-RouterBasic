import { Injectable } from '@angular/core';
import { Iheadphones } from '../models/AllInterfaces';

@Injectable({
  providedIn: 'root'
})
export class HeadphonesService {
 public headphonesArray : Array<Iheadphones>=[
  {
    Hname : 'Matlek Gaming Headphones',
    Himgurl : 'https://rukminim2.flixcart.com/image/612/612/l3vxbbk0/headphone/b/v/u/-original-imagewuzqrqktf6m.jpeg?q=70',
    Hrating : 4,
    Hprize : '899',
    Hstatus : 'Available',
    Hdetails : 'Matlek Gaming Headphones With Adjustable Mic | Deep Bass Wired Gaming Headset  (Blue, On the Ear)',
    HeadId : 1
  },
  {
    Hname : 'boAt Rockerz 551',
    Himgurl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/z/b/-original-imagznsrnzhtnbv7.jpeg?q=70',
    Hrating : 3.9,
    Hprize : '3499',
    Hstatus : 'Available',
    Hdetails : 'boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge Bluetooth Headset  (Stellar Black, On the Ear)',
    HeadId : 2
  },
  {
    Hname : 'boAt Rockerz 551',
    Himgurl : 'https://rukminim2.flixcart.com/image/416/416/kh2b4i80-0/headphone/k/g/l/infinity-extra-bass-wireless-on-ear-headphones-with-mic-green-original-imafx5pvx4b5yjft.jpeg?q=70',
    Hrating : 2.9,
    Hprize : '1044',
    Hstatus : 'Available',
    Hdetails : 'Landmark Infinity Extra Bass Wireless On-Ear Headphones with Mic - Green Bluetooth Headset  (Green, On the Ear)',
    HeadId : 3
  },
  {
    Hname : 'boAt Rockerz 551',
    Himgurl : 'https://rukminim2.flixcart.com/image/416/416/krjjde80/headphone/4/d/z/tw-p47-wireless-headphone-bluetooth-with-mic-bluetooth-headset-original-imag5agyphrhskms.jpeg?q=70',
    Hrating : 4,
    Hprize : '499',
    Hstatus : 'Out Of Stock',
    Hdetails : 'RECTITUDE Wireless Bluetooth Foldable Headphone With Mic Bluetooth Headset  (White, On the Ear)',
    HeadId : 4
  },
 ]
  constructor() { }

  getAllHeadApi(){
    return this.headphonesArray
  }
  getSingleHeadApi(id : number){
    return this.headphonesArray.find(head => head.HeadId === id)!
  }
}
