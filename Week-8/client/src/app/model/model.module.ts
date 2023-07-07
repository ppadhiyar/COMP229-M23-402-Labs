import { NgModule } from '@angular/core';
import { BookRepository} from './book.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [BookRepository, StaticDataSource, Cart,
  {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule {}
