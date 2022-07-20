import { Component, OnInit } from '@angular/core';
import { Iproduct } from './Product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './products-list.component.html',
  providers: [],
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Acme Product Manangement';
  showImage!: boolean;
  private _listFilter: string = '';
  filteredProducts: Iproduct[] = [];

  get listFilter(): string {
    return this._listFilter;
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
  }

  ratingClicked(value: number ): void {
    this.pageTitle = 'product List:' + value;


  }

  products: Iproduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 3,
      imageUrl: 'assets/images/hammer.png',
    },
  ];
}
