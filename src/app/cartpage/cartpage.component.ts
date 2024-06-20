import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  //ALL FKARR
  FKARR: any[] = [];
  private apiUrl = 'https://restaurant.stepprojects.ge/api/Baskets/AddToBasket';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFkarrData();
  }

  fetchFkarrData(): void {
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
}
