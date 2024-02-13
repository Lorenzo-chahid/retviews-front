// update-clothing.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClothingService } from '../clothing.service';

@Component({
  selector: 'app-updateClothing',
  templateUrl: './updateClothing.component.html',
  styleUrls: ['./updateClothing.component.css']
})
export class UpdateClothingComponent implements OnInit {
  updateForm: FormGroup;
  categories: any[] = [];
  itemId: number; // Ajout de la propriété pour stocker l'ID du vêtement

  constructor(
    private formBuilder: FormBuilder,
    private clothingService: ClothingService,
    private route: ActivatedRoute // Injection d'ActivatedRoute pour accéder aux paramètres de la route
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      image_url: [''],
      category_id: ['', Validators.required]
    });

    this.itemId = +this.route.snapshot.paramMap.get('item_id')!;
    this.getClothingCategories();
    this.initializeForm(); // Appel de la méthode pour initialiser le formulaire avec les valeurs du vêtement
  }

  getClothingCategories() {
    this.clothingService.getClothingCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (e) => console.error(e)
    });
  }

  initializeForm() {
    if (this.itemId) {
      this.clothingService.getClothingItemById(this.itemId).subscribe({
        next: (item) => {
          this.updateForm.patchValue({
            name: item.name,
            description: item.description,
            image_url: item.image_url,
            category_id: item.category.id
          });
        },
        error: (e) => console.error(e)
      });
    }
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.clothingService.updateClothingItem(this.itemId, this.updateForm.value).subscribe({
        next: (result) => {
          console.log('Vêtement mis à jour', result);
          // Gérer la réussite, par exemple en redirigeant vers une autre page
        },
        error: (e) => console.error('Erreur lors de la mise à jour', e)
      });
    }
  }
}
