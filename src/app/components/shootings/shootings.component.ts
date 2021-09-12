import { Component, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/services/galleryservice/galleries.service';

@Component({
  selector: 'app-shootings',
  templateUrl: './shootings.component.html',
  styleUrls: ['./shootings.component.scss']
})
export class ShootingsComponent implements OnInit {

  constructor(public cloudGalleryService:GalleriesService) { }

  IMAGES=this.cloudGalleryService.getMen();

  ngOnInit(): void {
  }

}
