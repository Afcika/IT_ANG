import { Injectable } from '@angular/core';
import { Product } from './categories/categories.component'; // Adjust the path as necessary

export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
  product: Product;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private storageKey = 'cartItems';

  constructor() {
    this.loadCartItems();
  }

  private saveCartItems(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }

  private loadCartItems(): void {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: Product): void {
    const existingItem = this.cartItems.find((cartItem) => cartItem.productId === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newCartItem: CartItem = {
        productId: item.id,
        quantity: 1,
        price: item.price,
        product: item,
      };
      this.cartItems.push(newCartItem);
    }

    this.saveCartItems();
    console.log('Cart Items:', this.cartItems);
  }

  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(cartItem => cartItem.productId === productId);
    if (item) {
      item.quantity++;
      this.saveCartItems();
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(cartItem => cartItem.productId === productId);
    if (item && item.quantity > 0) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromCart(productId);
      } else {
        this.saveCartItems();
      }
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
    this.saveCartItems();
  }
}
