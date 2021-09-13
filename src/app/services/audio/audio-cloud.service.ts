import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioCloudService {

  constructor() { }
  private files: any = [
    // tslint:disable-next-line: max-line-length
    {
      id: 0,
    songName: 'AsstalaVista Baby',
    coverUrl: `assets/MusicCover/Asstalavista Baby.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/Asstalavista+Baby.mp3`,
    },
    {
  
      id: 1,
    songName: 'Catalogues',
    coverUrl: `assets/MusicCover/Catalogues.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/Catalogues.mp3`,
    },
    {
  
      id: 2,
    songName: 'Esprit Sombre',
    coverUrl: `assets/MusicCover/Esprit Sombre.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/Esprit+Sombre.mp3`,
    },
    {
  
      id: 3,
    songName: 'H3X Insulean',
    coverUrl: `assets/MusicCover/H3X - InsuLean.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/H3X+-+InsuLean.mp3`,
    },
    {
  
      id: 4,
    songName: 'HANNIBAL FLYNT - Thunderdome Ultimate',
    coverUrl: `assets/MusicCover/HANNIBAL FLYNT - Thunderdome Ultimate Samplebank.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/HANNIBAL+FLYNT+-+Thunderdome+Ultimate+Samplebank.mp3`,
    },
    {
  
      id: 5,
    songName: 'Jartelle',
    coverUrl: `assets/MusicCover/Jartelle.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/Jartelle.mp3`,
    },
    {
  
      id: 6,
    songName: 'La tribecore des suicidés',
    coverUrl: `assets/MusicCover/La Tribecore Des Suicides.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/La+Tribecore+Des+Suicides.mp3`,
    },
    {
    id: 7,
    songName: 'Le frapcore du gaullois',
    coverUrl: `assets/MusicCover/Le Frapcore Du Gaulois.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/Le+Frapcore+Du+Gaulois.mp3`,
    },
    {
    id: 8,
    songName: 'Majeur en lair',
    coverUrl: `assets/MusicCover/Majeur En Lair.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/Majeur+En+Lair.mp3`,
    },
    {
    id: 9,
    songName: 'F-ck Humanity ft H3xJ222',
    coverUrl: `assets/MusicCover/F-ck Humanity ft H3xJ222.jpg`,
    songUrl: `https://metiissecoresongs.s3.eu-west-3.amazonaws.com/songs/F-ck+Humanity+ft+H3xJ222.mp3`,
    },
    
  ];

  getFiles() {
    return this.files;
  }
}
