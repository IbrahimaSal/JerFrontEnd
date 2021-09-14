import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/audio/player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  constructor(public playerService:PlayerService){
  }
  ngOnInit(): void {
  }
  songs=this.playerService.getSongs();
  aud:HTMLAudioElement=new Audio(this.songs[0].songUrl);
  
  play = () =>{
    console.log('play');
    this.aud.load();
    this.aud.play();
  }  
  pause = () =>{
    this.aud.pause();
  }
}
