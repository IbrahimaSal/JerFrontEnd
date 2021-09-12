import { Component, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/services/galleryservice/galleries.service';

@Component({
  selector: 'app-modeles-masculins',
  templateUrl: './modeles-masculins.component.html',
  styleUrls: ['./modeles-masculins.component.scss']
})
export class ModelesMasculinsComponent implements OnInit {
  constructor(public cloudGalleryService:GalleriesService) { }

  IMAGES=this.cloudGalleryService.getMen();
  
  ngOnInit(): void {

  }
  

}
