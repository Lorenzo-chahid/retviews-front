import { Component, OnInit } from '@angular/core';
import { ClothingItem, ClothingService } from '../clothing.service';

@Component({
  selector: 'app-bought-items',
  templateUrl: './bought-items.component.html',
  styleUrls: ['./bought-items.component.css']
})
export class BoughtItemsComponent implements OnInit {
  items: ClothingItem[] = [];

  constructor(private clothingService: ClothingService) { }

  ngOnInit(): void {
    this.clothingService.getClothingItemsByCategory(3).subscribe(items => {
      this.items = items;
    });
  }
}
