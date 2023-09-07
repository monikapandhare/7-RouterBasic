import { Component, OnInit } from '@angular/core';
import { IpodsService } from '../../services/ipods.service';
import { IPods } from '../../models/AllInterfaces';

@Component({
  selector: 'app-ipods',
  templateUrl: './ipods.component.html',
  styleUrls: ['./ipods.component.scss']
})
export class IpodsComponent implements OnInit {
  public allIpods : Array<IPods>=[]
  constructor(private _ipodsService : IpodsService) { }

  ngOnInit(): void {
    this.allIpods = this._ipodsService.getalIpodsApi()
  }

}
