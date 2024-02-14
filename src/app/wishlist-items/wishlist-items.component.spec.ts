import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistItemsComponent } from './wishlist-items.component';

describe('WishlistItemsComponent', () => {
  let component: WishlistItemsComponent;
  let fixture: ComponentFixture<WishlistItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistItemsComponent]
    });
    fixture = TestBed.createComponent(WishlistItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
