// clothing.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ClothingItem {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: {
    id: number;
    name: string;
  };
}
@Injectable({
  providedIn: 'root'
})
export class ClothingService {
  private baseUrl = 'https://api-myc.onrender.com';

  constructor(private http: HttpClient) {}


getClothingItems(): Observable<ClothingItem[]> {
  const token = localStorage.getItem('auth_token'); 
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.get<ClothingItem[]>(`${this.baseUrl}/clothing-items/`, { headers });
}


addClothingItem(name: string, description: string, imageUrl: string, categoryId: number): Observable<any> {
  const userId = localStorage.getItem('user_id'); 
  console.log(localStorage)
  console.log("USER ID : ", userId);
  if (!userId) {
      throw new Error('UserID not found');
  }

  const clothingItem = {
      name,
      description,
      image_url: imageUrl,
      category_id: categoryId,
      user_id: +userId 
  };

  return this.http.post(`${this.baseUrl}/new-clothing/`, clothingItem);
}

getClothingCategories(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/clothing-categories/`);
}


getClothingItemById(id: number): Observable<ClothingItem> {
  return this.http.get<ClothingItem>(`${this.baseUrl}/clothing-items/${id}`);
}

updateClothingItem(item_id: number, clothingItem: any): Observable<any> {
  const token = localStorage.getItem('auth_token'); 
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  const payload = {
    name: clothingItem.name,
    description: clothingItem.description,
    image_url: clothingItem.image_url,
    category_id: Number(clothingItem.category_id), // Assurez-vous que c'est un nombre
  };

  console.log("PAYLOAD :::: ", payload)

  return this.http.put(`${this.baseUrl}/edit-clothing/${item_id}/`, { headers });

}

}
