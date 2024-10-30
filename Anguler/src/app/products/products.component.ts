import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any[]=[
    {
      id:1,
      name:"Airports",
      image:"./a1.jpg",
      price:299,
      qty:10
    },

    {
      id:2,
      name:"Iphone 16 por max",
      image:"./a2.jpeg",
      price:999,
      qty:200
    },

    {
      id:3,
      name:"Apple watch",
      image:"./a3.jpg",
      price:5999,
      qty:150
    },
  ]

}
