
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

export interface Product {
  categoryId: number;
  id: number;
  image: string;
  name: string;
  nuts: boolean;
  price: number;
  spiciness: number;
  vegeterian: boolean;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  originalArr: Product[] = [];
  newarr: Product[] = [];
  selectedCategory: number | null = null;
  spicinessLevel: number = -1;
  spicinessText: string = 'Not Chosen';
  filterNoNuts: boolean = false;
  filterVegetarianOnly: boolean = false;

  @Output() addToCartClicked: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private httpapi: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.httpapi.get<Product[]>('https://restaurant.stepprojects.ge/api/Products/GetAll').subscribe((resp: Product[]) => {
      console.log(resp);
      this.originalArr = resp;
      this.newarr = resp;
    });
  }

  filterByCategory(categoryId: number | null): void {
    this.selectedCategory = categoryId;
    if (categoryId === null) {
      this.newarr = this.originalArr;
    } else {
      this.newarr = this.originalArr.filter((item) => item.categoryId === categoryId);
    }
    this.applyFilters();
  }

  applyFilters(): void {
    // Start with the original array before applying any filters
    this.newarr = this.originalArr;
  
    // Apply category filter
    if (this.selectedCategory !== null) {
      this.newarr = this.newarr.filter((item) => item.categoryId === this.selectedCategory);
    }
  
    // Apply spiciness filter
    if (this.spicinessLevel !== -1) {
      this.newarr = this.newarr.filter((item) => item.spiciness === this.spicinessLevel);
    }
  
    // Apply additional filters based on checkboxes
    if (this.filterNoNuts) {
      this.newarr = this.newarr.filter((item) => !item.nuts);
    }
  
    if (this.filterVegetarianOnly) {
      this.newarr = this.newarr.filter((item) => item.vegeterian);
    }
  }
  

  resetFilters(): void {
    // Reset all filters and selections
    this.selectedCategory = null;
    this.spicinessLevel = -1;
    this.filterNoNuts = false;
    this.filterVegetarianOnly = false;

    // Reset the product list to original
    this.newarr = this.originalArr;
    this.spicinessText = 'Not Chosen';

    this.applyFilters();
  }

  updateSpicinessText(): void {
    switch (this.spicinessLevel) {
      case -1:
        this.spicinessText = 'Not Chosen';
        break;
      case 0:
        this.spicinessText = '0';
        break;
      case 1:
        this.spicinessText = '1';
        break;
      case 2:
        this.spicinessText = '2';
        break;
      case 3:
        this.spicinessText = '3';
        break;
      case 4:
        this.spicinessText = '4';
        break;
      default:
        this.spicinessText = 'Not Chosen';
        break;
    }
  }

  addToCart(item: Product): void {
    this.cartService.addToCart(item);
    this.addToCartClicked.emit(item);
  }
}
