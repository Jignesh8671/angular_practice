import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproduct } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './products-list.component.html',
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  products!: Iproduct[];

  pageTitle: string = 'Acme Product Manangement';
  showImage!: boolean;
  private _listFilter: string = '';
  filteredProducts: Iproduct[] = [];
  sub!: Subscription;

  get listFilter(): string {
    return this._listFilter;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;

  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  // default values are stored into the nginit
  // to  use the encapusulation in the angular we must declare the varialbe private first
  // private variable naming convention is underscore and name of  the variable in camle case
  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('on init');
    this._listFilter = 'cart';
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => err.errorMessage,
    });
  }

  ratingClicked(value: number): void {
    this.pageTitle = 'product List:' + value;
  }
}
