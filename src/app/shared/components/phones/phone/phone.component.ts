import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iphones } from 'src/app/shared/models/AllInterfaces';
import { PhonesService } from 'src/app/shared/services/phones.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  public phonId! : number;
  public phoneObj !: Iphones
  constructor(private _phoneService:PhonesService, private _routes : ActivatedRoute) { }

  ngOnInit(): void {
    this.phonId = +this._routes.snapshot.params['moId'];
    this.phoneObj = this._phoneService.getSinglephoneApi(this.phonId)
    
  }

}
