import { Component, OnInit } from '@angular/core';
import { HeadphonesService } from '../../services/headphones.service';
import { Iheadphones } from '../../models/AllInterfaces';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.scss']
})
export class HeadphonesComponent implements OnInit {
  public allHeadphones : Array<Iheadphones> = []
  constructor(private _headphonesService : HeadphonesService) { }

  ngOnInit(): void {
    this.allHeadphones = this._headphonesService.getAllHeadApi()
  }

}
