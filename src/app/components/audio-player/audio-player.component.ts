import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/audio/player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor(playerservice:PlayerService) {
    console.log(playerservice.getSongIndex());
   }

  ngOnInit(): void {
  }

}
