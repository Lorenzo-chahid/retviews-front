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
    // Vous aurez besoin d'implémenter une méthode dans AuthService pour récupérer les infos de l'utilisateur
    // this.authService.getUserInfo().subscribe(user => this.user = user);
  }

  getLastAddedItems() {
    this.clothingService.getClothingItems().subscribe(items => {
      // Vous devrez filtrer ou ajuster cette logique en fonction de la réponse de votre API
      // Pour cet exemple, je suppose que vous avez déjà le dernier article par catégorie
      this.lastAddedItems = items;
    });
  }
}
