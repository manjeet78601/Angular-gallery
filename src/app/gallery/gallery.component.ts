import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
 title = 'Recent Photos';
 @Input() filterBy?: string = 'all'
 visibleImages: any[] = [];
  constructor(private imagService: ImageService) {
    this.visibleImages = this.imagService.getImages();
   }

  ngOnChanges() {
    this.visibleImages = this.imagService.getImages();
  }

}
