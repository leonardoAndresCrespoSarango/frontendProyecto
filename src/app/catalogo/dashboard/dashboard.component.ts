import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productList: any[] = [
    {
      title: "Producto 1",
      description: "Descripción del producto 1",
      price: 9.99
    },
    {
      title: "Producto 2",
      description: "Descripción del producto 2",
      price: 19.99
    },
    {
      title: "Producto 3",
      description: "Descripción del producto 3",
      price: 14.99
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
