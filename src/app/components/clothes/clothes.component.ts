import { Component, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/services/galleryservice/galleries.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {

  constructor(public cloudGalleryService:GalleriesService) { }

  IMAGES=this.cloudGalleryService.getClothes();

  ngOnInit(): void {
  }

}
