import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject, Observable } from 'rxjs';
const moment =require('moment');
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StreamState } from 'src/app/interfaces/stream-state';
// import { takeUntil } from 'rxjs/operators';
import { AudioCloudService } from './audio-cloud.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private cloudService: AudioCloudService
    ) { 
    this.currentSong.load();
    this.playStream(this.currentSong).subscribe();
  }
  

  private songs=this.cloudService.getFiles();

  getSongs = () =>{
    return this.songs;
  }

  musicInfoFrame:string = 'closed';

  playstop:string = 'stop';

  indexOfSongToPlay = 0;

  isPlaying:boolean = false;

  currentSong = new Audio(this.songs[this.indexOfSongToPlay].songUrl);

  timer = this.currentSong.currentTime;

  private observable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private songindex  : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // private songDuration : BehaviorSubject<string> = new BehaviorSubject<string>(this.formatTime(this.currentSong.duration));
  private songDuration : BehaviorSubject<string> = new BehaviorSubject<string>(String(this.currentSong.duration));

  private songVolume: BehaviorSubject<number> = new BehaviorSubject<number>(0.5);

  getSongVolume = () =>{
    return this.songVolume;
  }

  getSongDuration = () =>{
    return this.songDuration;
  }

  getobservable = () =>{
    return this.observable;
  }
  
  getSongIndex = () =>{
    return this.songindex;
  }

  private stop$ = new Subject();

  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.currentSong.duration;
        // this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;        
      case "playing":        
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        break;
      case "timeupdate":
        this.state.currentTime = this.currentSong.currentTime;
        // this.state.readableCurrentTime = this.formatTime(
        // this.state.currentTime
        // );
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }
  stop() {
    this.stop$.next();
  }

  seekTo(seconds:number) {
    console.log(seconds);
    this.currentSong.currentTime = seconds;
  }
  changevolume(newVolume:number) {
    this.currentSong.volume=newVolume;
    this.songVolume.next(newVolume);
  }

  formatTime(time: number, format: string = 'mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
  getCurrentSong = ():HTMLAudioElement=>{
    return this.currentSong;
  }

  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    // "loadedmetadata",
    // "loadstart",
  ];

getStateReadableDuration = ()=>{
  return this.state.readableDuration;
}
private addEvents(audioElement:any, events:string[], handler:Function) {
  events.forEach((event:string) => {
    audioElement.addEventListener(event, handler);
  });
}

private removeEvents(audioElement:any, events:string[], handler:Function) {
  events.forEach((event:string) => {
    audioElement.removeEventListener(event, handler);
  });
}

private AudioObservable(audioElement:HTMLAudioElement){  
  return new Observable((observer)=>{    
    // audioElement.load();
    // audioElement.play();
    const handler=(event:Event)=>{
      this.updateStateEvents(event);
      observer.next(event);
    }
    this.addEvents(audioElement, this.audioEvents, handler);
    return () => {
      // Stop Playing
      audioElement.pause();
      audioElement.currentTime = 0;
      console.log('observable initialisé');
      // remove event listeners
      this.removeEvents(audioElement, this.audioEvents, handler);
    };
  });
}

playStream(audioElement:HTMLAudioElement) {
  // return this.AudioObservable(audioElement).pipe(takeUntil(this.stop$));
  return this.AudioObservable(audioElement);
}

playCurrentSong = () => {
  this.currentSong.play();
  this.musicInfoFrame='opened';
  this.isPlaying=true;
  this.playstop='play';  
  console.log(this.playstop);
  this.observable.next(this.isPlaying);
  this.playStream(this.currentSong).subscribe();
  this.currentSong.play();
}


pauseCurrentSong = () => {
  this.playstop="pause";
  this.currentSong.pause();
  this.isPlaying=false;
  console.log(this.playstop);
  this.observable.next(this.isPlaying); 
}

nextSong = () => {
  this.currentSong.pause();
  if(this.indexOfSongToPlay === ( this.songs.length - 1 )){
    this.indexOfSongToPlay = 0;
  }else{
    this.indexOfSongToPlay+=1;
  }
  this.songindex.next(this.indexOfSongToPlay);
  this.currentSong = new Audio(this.songs[this.indexOfSongToPlay].songUrl);
  this.currentSong.load();
  if(this.musicInfoFrame==='opened'){
    this.playstop='zero';
  }
  this.isPlaying=false;
  
  this.playStream(this.currentSong).subscribe();
  this.stateChange.next(this.state);
  this.songDuration.next(this.state.readableDuration);

}

previousSong = () => {
  this.currentSong.pause();
  if(this.musicInfoFrame==='opened'){
    this.playstop='zero';
  }
  if(this.indexOfSongToPlay === 0){
    this.indexOfSongToPlay = this.songs.length - 1;
  }else{
    this.indexOfSongToPlay-=1;
  }
  // this.currentSong.load();
  if(this.isPlaying){
    this.currentSong.play();
  }
  
  this.currentSong = new Audio(this.songs[this.indexOfSongToPlay].songUrl);
  // this.songDuration.next(this.formatTime(this.currentSong.duration));
  this.currentSong.load();
  this.playStream(this.currentSong).subscribe();
  this.observable.next(this.isPlaying);
  this.songindex.next(this.indexOfSongToPlay);
  this.stateChange.next(this.state);
}

stopSong = () => {
  this.currentSong.load();
  this.isPlaying=false;
  this.playstop='stop';
  console.log(this.playstop);
  this.observable.next(this.isPlaying);
  this.stop$.next();
  this.playStream(this.currentSong).subscribe();
  this.musicInfoFrame="closed";
}

replaySong = () => {    
  this.currentSong.load();
  this.currentSong.play();
  this.isPlaying=true;
}
  
}
