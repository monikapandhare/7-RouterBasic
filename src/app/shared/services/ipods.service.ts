import { Injectable } from '@angular/core';
import { IPods } from '../models/AllInterfaces';

@Injectable({
  providedIn: 'root'
})
export class IpodsService {
 public ipodsArray : Array<IPods> = [
  
    {
      Iname : 'Boult',
      Iimgurl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/d/q/t/-original-imagsd5hk6ta39wx.jpeg?q=70',
      Irating : 4,
      Iprize : '899',
      Istatus : 'Available',
      Idetails : 'Boult Audio Airbass Z35 with ZEN ENC Mic, 32H Playtime, 45ms Ultra-Low Latency Mode, 5.3 Bluetooth Headset  (Graphite Black, True Wireless)',
      ipodId : 1
    },
    {
      Iname : 'Oppo',
      Iimgurl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/t/j/-original-imagn8vha6gzqsrf.jpeg?q=70',
      Irating : 4.2,
      Iprize : '1799',
      Istatus : 'Out Of Stock',
      Idetails : 'OPPO Enco Buds 2 with 28 Hours Playback and AI Deep Noise Cancellation Bluetooth Headset  (Lime Green, True Wireless)',
      ipodId : 2
    },
    {
      Iname : 'HOUSE OF SOUND M19',
      Iimgurl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/8/l/m19-house-of-sound-original-imagr5tn9pwbgsxz.jpeg?q=70',
      Irating : 4.5,
      Iprize : '499',
      Istatus : 'Out Of Stock',
      Idetails : 'HOUSE OF SOUND M19 Bluetooth Headset  (Daek Black, True Wireless)',
      ipodId : 3
    },
    {
      Iname : 'TXOR SENSO V 1.0 TWS earphones',
      Iimgurl : 'https://rukminim2.flixcart.com/image/612/612/l1grgcw0/headphone/l/g/b/appple-airpoods-pro-with-wireless-charging-case-1goal-original-imagdytjmwuayw5a.jpeg?q=70',
      Irating : 3,
      Iprize : '799',
      Istatus : 'Available',
      Idetails : 'TXOR SENSO V 1.0 TWS EARBUDS, Bass+ 20 H Playtime & Fast Charging v5.1 Bluetooth Headset  (Metallic White, True Wireless)',
      ipodId : 4
    },
 
]


  constructor() { }
  getalIpodsApi(){
    return this.ipodsArray
  }

  getSingleIpodsApi(id : number){
    return this.ipodsArray.find(ipod => ipod.ipodId === id)!
  }
}
