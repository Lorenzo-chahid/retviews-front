import { Component, OnInit } from '@angular/core';
import { ClothingItem, ClothingService } from '../clothing.service';

@Component({
  selector: 'app-wishlist-items',
  templateUrl: './wishlist-items.component.html',
  styleUrls: ['./wishlist-items.component.css']
})
export class WishlistItemsComponent implements OnInit {
  items: ClothingItem[] = [];

  constructor(private clothingService: ClothingService) { }

  ngOnInit(): void {
    this.clothingService.getClothingItemsByCategory(2).subscribe(items => {
      this.items = items;
    });
  }
}
