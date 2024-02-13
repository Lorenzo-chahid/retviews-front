import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ClothingService, ClothingItem } from '../clothing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any; // Typez correctement en fonction de votre application
  lastAddedItems: ClothingItem[] = [];

  constructor(private authService: AuthService, private clothingService: ClothingService) { }

  ngOnInit() {
    this.getUserInfo();
    this.getLastAddedItems();
  }

  getUserInfo() {
    this.authService.getUserInfo().subscribe({
      next: (user) => {
        this.user = user;
        console.log("TESTIO :: ", user)
      },
      error: (error) => {
        console.error('Error fetching user info:', error);
      }
    });
  }

  getLastAddedItems() {
    this.clothingService.getClothingItems().subscribe({
      next: (items) => {
        this.lastAddedItems = items;
        // Vous devrez peut-être ajuster cette logique en fonction de la réponse de votre API
        // et de la manière dont vous souhaitez filtrer ou traiter les éléments
      },
      error: (error) => {
        console.error('Error fetching last added items:', error);
      }
    });
  }
}
