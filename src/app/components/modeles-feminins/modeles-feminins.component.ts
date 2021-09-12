import { Component, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/services/galleryservice/galleries.service';

@Component({
  selector: 'app-modeles-feminins',
  templateUrl: './modeles-feminins.component.html',
  styleUrls: ['./modeles-feminins.component.scss']
})
export class ModelesFemininsComponent implements OnInit {

  constructor(public cloudGalleryService:GalleriesService) { }

  ngOnInit(): void {

  }
  IMAGES=this.cloudGalleryService.getGIRL();

}
