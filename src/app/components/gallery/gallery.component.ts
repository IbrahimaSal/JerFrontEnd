import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() IMG: { id: number; src: string; }[] = [];
  //IMAGES=this.cloudService.getFiles();

  title :string = 'Gallery';
  // IMAGES = [ ...Array(36).keys() ].map((n) => ({id: n, src: `assets/images/${n}.jpg`}));
  galleryOnTop = true as boolean;
  indexOfImageToShow = 0 as number;
  bottomRowImages=document.getElementsByClassName('bottomRowImageGallery') as HTMLCollectionOf<HTMLElement>;
  // quantityOfImagesToDisplay = this.IMAGES.length;
  quantityOfImagesToDisplay = this.IMG.length;
  carouselOnTop=false as boolean;

  showGallery = () => {
    this.galleryOnTop = true;
    this.carouselOnTop=false;
  }

  showCarouselAtImage = async (k:number) => {
    this.galleryOnTop = false;
    this.carouselOnTop = true;
    this.indexOfImageToShow = k;
    let content = k;
    setTimeout(() => {  
      const content = document.getElementById('bottomRow');
      const scrollStep=( content)!.scrollWidth/36;
      content!.scrollTo((this.indexOfImageToShow-4)*scrollStep, 0);
    }, 0);
  }

  displayNextImage = () => {
    this.deActivateAll();   
    // if(this.indexOfImageToShow === this.IMAGES.length - 1){
      if(this.indexOfImageToShow === this.IMG.length - 1){
      this.indexOfImageToShow=0;
    }
    this.indexOfImageToShow+=1;
    this.activateBottomRowImage(this.indexOfImageToShow);
    const content = document.getElementById('bottomRow') as HTMLElement;
    // const scrollStep= content.scrollWidth/this.IMAGES.length;
    const scrollStep= content.scrollWidth/this.IMG.length;
    content.scrollTo((this.indexOfImageToShow-4)*scrollStep, 0);
  }
  displayPreviousImage = () => {
    this.deActivateAll();
    if(this.indexOfImageToShow === 0){
      // this.indexOfImageToShow=this.IMAGES.length - 1;
      this.indexOfImageToShow=this.IMG.length - 1;
    } 
    this.indexOfImageToShow-=1;
    this.activateBottomRowImage(this.indexOfImageToShow);
    const content = document.getElementById('bottomRow') as HTMLElement;
    // const scrollStep= content.scrollWidth/this.IMAGES.length;
    const scrollStep= content.scrollWidth/this.IMG.length;
    content.scrollTo((this.indexOfImageToShow-4)*scrollStep, 0);
  }
  houhou=()=>{
    const content = document.getElementById('bottomRow') as HTMLElement;
    // const scrollStep= content.scrollWidth/this.IMAGES.length;
    const scrollStep= content.scrollWidth/this.IMG.length;
    return (this.indexOfImageToShow-4)*scrollStep;
  }
  changeImageToShow = (k:number) =>{
    this.deActivateAll();
    this.indexOfImageToShow = k;
    this.activateBottomRowImage(this.indexOfImageToShow);
  }
  activateBottomRowImage = (k:number) => {
    this.bottomRowImages[k].className+=' active';
  }
  deActivate = (node:HTMLElement) => {
    node.className=node.className.replace(' active', '');
  }
  deActivateAll = () =>{
    for(let k=0;k<this.bottomRowImages.length;k++){
      this.deActivate(this.bottomRowImages[k]);
    }
  }
  // rePositioning = (k:number) => (row:HTMLElement) => {
  //   const q = row.childElementCount;
  //   const scrollStep = row.scrollWidth/q;
  //   row.scrollTo((k-4)*scrollStep, 0);
  // }

}
