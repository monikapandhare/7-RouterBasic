import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPods } from 'src/app/shared/models/AllInterfaces';
import { IpodsService } from 'src/app/shared/services/ipods.service';

@Component({
  selector: 'app-ipod',
  templateUrl: './ipod.component.html',
  styleUrls: ['./ipod.component.scss']
})
export class IpodComponent implements OnInit {
  public ipodsId !: number;
  public ipodsInfo!: IPods
  constructor(private _routs : ActivatedRoute,private _ipodsService : IpodsService) { }

  ngOnInit(): void {
    this.ipodsId = +this._routs.snapshot.params['ipodId']
    this.ipodsInfo = this._ipodsService.getSingleIpodsApi(this.ipodsId)
  }

}
