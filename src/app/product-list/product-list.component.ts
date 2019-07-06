import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})




export class ProductListComponent {
  products = products;

  share() {
    window.alert('Este produto foi compartilhado!');
  }

  onNotify() {
    window.alert('Voce será notificado quando o produto dor vendido');
  }
}