import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Product {
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  [x: string]: any;

  // originalArr: Product[] = [];
  // newarr: Product[] = [];
  // selectedCategory: number | null = null;
  // spicinessLevel: number = -1; // Default to -1 (Not Chosen)
  // spicinessText: string = 'Not Chosen';
  // filterNoNuts: boolean = false;
  // filterVegetarianOnly: boolean = false;

  // constructor(private httpapi: HttpClient) {}

  // ngOnInit(): void {
  //   this.httpapi.get<Product[]>("https://restaurant.stepprojects.ge/api/Products/GetAll")
  //     .subscribe((resp: Product[]) => {
  //       console.log(resp);
  //       this.originalArr = resp;
  //       this.newarr = resp;
  //     });
  // }

  // filterByCategory(categoryId: number | null): void {
  //   this.selectedCategory = categoryId;
  //   if (categoryId === null) {
  //     this.newarr = this.originalArr;
  //   } else {
  //     this.newarr = this.originalArr.filter(item => item.categoryId === categoryId);
  //   }
  // }

  // applyFilters(): void {
  //   // Apply category filter
  //   this.filterByCategory(this.selectedCategory);

  //   // Apply spiciness filter
  //   if (this.spicinessLevel !== -1) {
  //     this.newarr = this.newarr.filter(item => item.spiciness === this.spicinessLevel);
  //   }

  //   // Apply additional filters based on checkboxes
  //   if (this.filterNoNuts) {
  //     this.newarr = this.newarr.filter(item => !item.nuts);
  //   }

  //   if (this.filterVegetarianOnly) {
  //     this.newarr = this.newarr.filter(item => item.vegeterian);
  //   }
  // }

  // resetFilters(): void {
  //   // Reset all filters and selections
  //   this.selectedCategory = null;
  //   this.spicinessLevel = -1;
  //   this.filterNoNuts = false;
  //   this.filterVegetarianOnly = false;

  //   // Reset the product list to original
  //   this.newarr = this.originalArr;
  //   this.spicinessText = 'Not Chosen';
  // }

  // updateSpicinessText(): void {
  //   switch (this.spicinessLevel) {
  //     case -1:
  //       this.spicinessText = 'Not Chosen';
  //       break;
  //     case 0:
  //       this.spicinessText = '0';
  //       break;
  //     case 1:
  //       this.spicinessText = '1';
  //       break;
  //     case 2:
  //       this.spicinessText = '2';
  //       break;
  //     case 3:
  //       this.spicinessText = '3';
  //       break;
  //     case 4:
  //       this.spicinessText = '4';
  //       break;
  //     default:
  //       this.spicinessText = 'Not Chosen';
  //       break;
  //   }
  // }
}
