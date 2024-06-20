import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
  cartItems: CartItem[] = [];
  FKARR: any[] = [];
  private apiUrl = 'https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket'; //FKAPI

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void { //FKAPI
    this.cartItems = this.cartService.getCartItems();
    this.fetchFkarrData();
  }

  fetchFkarrData(): void {  //FKAPI
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.FKARR = data;
        console.log('Data fetched successfully:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  increaseQuantity(productId: number): void {
    this.cartService.increaseQuantity(productId);
    this.updateCartItems();
  }

  decreaseQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);
    this.updateCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.updateCartItems();
  }

  private updateCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  }
}
