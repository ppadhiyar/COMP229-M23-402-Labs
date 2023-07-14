import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: Cart,
              public router: Router) { }

  ngOnInit(): void {
  }

  viewCart(): void
  {
    this.router.navigateByUrl('/cart');
  }

}
