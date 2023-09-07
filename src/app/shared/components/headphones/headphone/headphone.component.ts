import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iheadphones } from 'src/app/shared/models/AllInterfaces';
import { HeadphonesService } from 'src/app/shared/services/headphones.service';

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrls: ['./headphone.component.scss']
})
export class HeadphoneComponent implements OnInit {
  public headpId ! : number;
  public headObj ! : Iheadphones;
  constructor(private _routes : ActivatedRoute, private _headService : HeadphonesService) { }

  ngOnInit(): void {
    this.headpId = +this._routes.snapshot.params['HeadId']
    this.headObj = this._headService.getSingleHeadApi(this.headpId)
    
  }

}
