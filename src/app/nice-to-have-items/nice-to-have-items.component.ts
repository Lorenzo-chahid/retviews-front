import { Component, OnInit } from '@angular/core';
import { ClothingItem, ClothingService } from '../clothing.service';

@Component({
  selector: 'app-nice-to-have-items',
  templateUrl: './nice-to-have-items.component.html',
  styleUrls: ['./nice-to-have-items.component.css']
})
export class NiceToHaveItemsComponent implements OnInit {
  items: ClothingItem[] = [];

  constructor(private clothingService: ClothingService) { }

  ngOnInit(): void {
    this.clothingService.getClothingItemsByCategory(1).subscribe(items => {
      this.items = items;
    });
  }
}
