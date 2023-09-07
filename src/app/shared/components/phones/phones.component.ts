import { Component, OnInit } from '@angular/core';
import { Iphones } from '../../models/AllInterfaces';
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  public allPhones : Array<Iphones> = []
  constructor(private _phonesService : PhonesService) { }

  ngOnInit(): void {
    this.allPhones = this._phonesService.getAllPhonesApi()
  }

}
