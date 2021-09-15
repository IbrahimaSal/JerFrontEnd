import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { StreamState } from 'src/app/interfaces/stream-state';
import { PlayerService } from 'src/app/services/audio/player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger('MusicInfoState', [
      state('opened', style({  opacity: 1 , 
        height: '15vh', width:'90%',
       })),          
      state('closed', style({  opacity: 0, height: '0', width:'85%',})),
      transition('opened <=> closed', animate('1500ms ease-in-out')),
    ]),
    trigger('isPlaying', [
      state('play', style({  opacity: 1, 
        transform: 'translateY(-50%)',
        animation: 'rotate 3s linear infinite',
        animationPlayState: 'running' 
      })),
      state('pause', style({  opacity: 1 , 
        animation: 'rotate 3s linear infinite',
        animationPlayState: 'paused' 
      })),
      state('zero', style({  opacity: 1, transform: 'translateY(-50%) rotate(0deg)'})),
      state('stop', style({  opacity: 1, transform: 'translateY(0%)', })),
      transition('play <=> stop', animate('1500ms ease-in-out')),
      // transition('play <=> pause', animate('1ms ease-in-out')),
      transition('pause <=> stop', animate('1500ms ease-in-out')),
    ]),
  ],
})
export class AudioPlayerComponent implements OnInit {
  state:StreamState | undefined;
  dura:string="";
  volumeState:number=0.5;
  constructor(public playerService:PlayerService) {        
    this.playerService.getSongIndex().subscribe((value)=>{
      console.log(value);
      this.indexOfSongToPlay=value;
    });
    this.playerService.getState().subscribe(state => {
      this.state = state;
    });
    this.playerService.getSongDuration().subscribe(readableDuration =>{
      this.dura=""+readableDuration;
      console.log(this.dura);
    });
    this.playerService.getSongVolume().subscribe((volume:number)=>{this.volumeState=volume;console.log(this.volumeState);});
  }
  
  value = () : number => {   
    return (this.state?.currentTime  && this.state?.duration)?1000*(this.state.currentTime/this.state.duration):0;
  }
  
  time = (value:number,duration:number):number=>{
    return value*duration/1000
  }
  
  readableTime=(value:number):string =>{
    // const momentTime = value * 1000;
    // return moment.utc(momentTime).format('mm:ss');
    return `${value}`
  }
  
  getCurrentSong = this.playerService.getCurrentSong;
  
  ngOnInit(): void {    
  }
  ngOnChanges() {
  } 
  getStateReadableDuration = this.playerService.getStateReadableDuration;
  
  playin:boolean=false;
  
  songs=this.playerService.getSongs(); 
  
  playstop = () => {
    return this.playerService.playstop;
  }
  
  MusicInfoFrame = () =>{
    return this.playerService.musicInfoFrame;
  }
  
  showPlayer=true;
  
  indexOfSongToPlay=this.playerService.indexOfSongToPlay;
  
  isPlaying= () =>{return this.playerService.isPlaying;}
  previousSong=this.playerService.previousSong;
  nextSong=this.playerService.nextSong;
  stopSong=this.playerService.stopSong;
  playCurrentSong=this.playerService.playCurrentSong;
  replaySong=this.playerService.replaySong;
  pauseCurrentSong= this.playerService.pauseCurrentSong;
  
  onSliderChangeEnd(change:any) {
    // console.log(`change value:${change.value}`);
    this.playerService.seekTo(change.target.value);
    console.log(`state : ${this.state?.currentTime}`);
    // this.time(change.value, this.getCurrentSong().duration)
  }
  onVolumeSliderChange(change:any) {
    // console.log(`change value:${change.value}`);
    this.playerService.changevolume(change.target.value);
    // this.time(change.value, this.getCurrentSong().duration)
  }
  
  cursorAdvancement = ():string=>{
    const percentage=(this.state?.duration && this.state.currentTime)?(this.state.currentTime*100)/(this.state?.duration):0;
    return `background-image: -webkit-gradient(linear,
      left top, 
      right top, 
      color-stop(${percentage}%, red),
      color-stop(${percentage}%, white));`
  }
  
  panelShadow(event: NgbPanelChangeEvent) {
    console.log(event);
    console.log(event.panelId.slice(5,6));
    const index = (event.panelId.length==6)?Number(event.panelId.slice(-1)):Number(event.panelId.slice(5,7));
    console.log(index);
  }
}
