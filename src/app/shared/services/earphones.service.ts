import { Injectable } from '@angular/core';
import { Iearphones } from '../models/AllInterfaces';

@Injectable({
  providedIn: 'root'
})
export class EarphonesService {
  earphonesArray : Array<Iearphones> = [
    {
      Ename : 'Boult',
      Eimgurl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/k/q/-original-imagkf35jd7sxhzu.jpeg?q=70',
      Erating : 4,
      Eprize : '899',
      Estatus : 'Available',
      Edetails : 'Boult Audio Airbass Z35 with ZEN ENC Mic, 32H Playtime, 45ms Ultra-Low Latency Mode, 5.3 Bluetooth Headset  (Graphite Black, True Wireless)',
      earid : 1
    },
    {
      Ename : 'Oppo',
      Eimgurl : 'https://rukminim2.flixcart.com/image/612/612/l1zc6fk0/headphone/t/j/l/-original-imagdffhsbfz743n.jpeg?q=70',
      Erating : 4.2,
      Eprize : '1799',
      Estatus : 'Out Of Stock',
      Edetails : 'OPPO Enco Buds 2 with 28 Hours Playback and AI Deep Noise Cancellation Bluetooth Headset  (Lime Green, True Wireless)',
      earid : 2
    },
    {
      Ename : 'HOUSE OF SOUND M19',
      Eimgurl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/n/b/series-1-house-of-sound-original-imagstmvdmgrymcm.jpeg?q=70',
      Erating : 4.5,
      Eprize : '499',
      Estatus : 'Out Of Stock',
      Edetails : 'HOUSE OF SOUND M19 Bluetooth Headset  (Daek Black, True Wireless)',
      earid : 3
    },
    {
      Ename : 'TXOR SENSO V 1.0 TWS earphones',
      Eimgurl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/l/q/slayer-v-1-0-wireless-neckband-bass-earphones-20-hrs-playback-original-imaghevpevcfssxh.jpeg?q=70',
      Erating : 3,
      Eprize : '799',
      Estatus : 'Available',
      Edetails : 'TXOR SENSO V 1.0 TWS EARBUDS, Bass+ 20 H Playtime & Fast Charging v5.1 Bluetooth Headset  (Metallic White, True Wireless)',
      earid : 4
    },
  ]
  constructor() { }

  getAllEarApi() : Array<Iearphones>{
   return this.earphonesArray
  }

  getSingleEarApi(id : number){
    return this.earphonesArray.find(ear => ear.earid === id)!
  }
}
