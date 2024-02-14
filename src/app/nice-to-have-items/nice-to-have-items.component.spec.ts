import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceToHaveItemsComponent } from './nice-to-have-items.component';

describe('NiceToHaveItemsComponent', () => {
  let component: NiceToHaveItemsComponent;
  let fixture: ComponentFixture<NiceToHaveItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiceToHaveItemsComponent]
    });
    fixture = TestBed.createComponent(NiceToHaveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
