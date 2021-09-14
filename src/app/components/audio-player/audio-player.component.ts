import { Component, OnInit } from '@angular/core';
import { StreamState } from 'src/app/interfaces/stream-state';
import { PlayerService } from 'src/app/services/audio/player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  constructor(public playerService:PlayerService){
    // this.playerService.getSongIndex().subscribe((value)=>{
    //   console.log(value);
    //   this.indexOfSongToPlay=value;
    // });
    // this.playerService.getState().subscribe(state => {
    //   this.state = state;
    // });
    // this.playerService.getSongDuration().subscribe(readableDuration =>{
    //   this.dura=""+readableDuration;
    //   console.log(this.dura);
    // });
    // this.playerService.getSongVolume().subscribe((volume:number)=>{this.volumeState=volume;console.log(this.volumeState);});
  }
  ngOnInit(): void {

  }


}
