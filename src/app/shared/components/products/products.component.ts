import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  goToUsers(){
    this._router.navigate(['/users'])
  }

}
