import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImage = [];
  getImages() {
  return this.visibleImage = IMAGES.slice(0);
}
getImage(id: number) {
return IMAGES.slice(0).find(image => image.id == id)
}

}
const IMAGES = [
  { 'id' : 1, 'category': 'boats', 'caption': 'view from a Boat' , 'url' : 'assets/img/boats-1.jpg' },
  { 'id' : 2, 'category': 'boats', 'caption': 'view from a Boat' , 'url' : 'assets/img/boats-2.jpg' },
  { 'id' : 3, 'category': 'boats', 'caption': 'view from a Boat' , 'url' : 'assets/img/boats-3.jpg' },
  { 'id' : 4, 'category': 'house', 'caption': 'view from a house' , 'url' : 'assets/img/house-1.jpg' },
  { 'id' : 5, 'category': 'house', 'caption': 'view from a house' , 'url' : 'assets/img/house-2.jpg' },
  { 'id' : 6, 'category': 'house', 'caption': 'view from a House' , 'url' : 'assets/img/house-3.jpg' },
  { 'id' : 7, 'category': 'white', 'caption': 'view from a white' , 'url' : 'assets/img/white-1.jpg' },
  { 'id' : 8, 'category': 'human', 'caption': 'view from a human' , 'url' : 'assets/img/human-1.jpg' },
  { 'id' : 9, 'category': 'human', 'caption': 'view from a human' , 'url' : 'assets/img/human-2.jpg' },
  { 'id' : 10, 'category': 'human', 'caption': 'view from a human' , 'url' : 'assets/img/human-3.jpg'}
];
