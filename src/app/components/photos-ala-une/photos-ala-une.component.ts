import { Component, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/services/galleryservice/galleries.service';

@Component({
  selector: 'app-photos-ala-une',
  templateUrl: './photos-ala-une.component.html',
  styleUrls: ['./photos-ala-une.component.scss']
})
export class PhotosAlaUneComponent implements OnInit {

  constructor(private cloudGalleryService:GalleriesService) { }
  IMAGES=this.cloudGalleryService.getClothes();

  ngOnInit(): void {
  }

}
