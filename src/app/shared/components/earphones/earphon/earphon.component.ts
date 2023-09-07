import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iearphones } from 'src/app/shared/models/AllInterfaces';
import { EarphonesService } from 'src/app/shared/services/earphones.service';

@Component({
  selector: 'app-earphon',
  templateUrl: './earphon.component.html',
  styleUrls: ['./earphon.component.scss']
})
export class EarphonComponent implements OnInit {
  public earId! : number;
  public earInfo ! : Iearphones;
 

  constructor(private _routes : ActivatedRoute, private _earService : EarphonesService) { }

  ngOnInit(): void {
    this.earId = +this._routes.snapshot.params['earid']
    this.earInfo = this._earService.getSingleEarApi(this.earId)
    console.log(this.earInfo);
    
  }

}
