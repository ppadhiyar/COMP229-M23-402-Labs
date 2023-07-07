import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';


@Injectable()
export class OrderRepository
{
  private orders: Order[];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadOrders(): void
  {
    this.loaded = true;
    this.dataSource.getOrders()
    .subscribe(orders => this.orders = orders);
  }

  getOrders(): Order[]
  {
    if (!this.loaded)
    {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order>
  {
    return this.dataSource.saveOrder(order);
  }

}
