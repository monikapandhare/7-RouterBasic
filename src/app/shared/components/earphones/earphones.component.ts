import { Component, OnInit } from '@angular/core';
import { EarphonesService } from '../../services/earphones.service';
import { Iearphones } from '../../models/AllInterfaces';

@Component({
  selector: 'app-earphones',
  templateUrl: './earphones.component.html',
  styleUrls: ['./earphones.component.scss']
})
export class EarphonesComponent implements OnInit {
  public Earphoninfo : Array<Iearphones> = []
  constructor(private _earphoneService : EarphonesService) { }

  ngOnInit(): void {
    this.Earphoninfo = this._earphoneService.getAllEarApi()
    
  }

}
