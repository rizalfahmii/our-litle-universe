import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements AfterViewInit {

  @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {

    const video = this.heroVideo.nativeElement;

    video.muted = true;

    video.play()
      .then(() => {
        console.log('🎥 Hero autoplay berhasil');
      })
      .catch(error => {
        console.error('❌ Hero autoplay gagal:', error);
      });

  }

  playVideo(): void {

    const video = this.heroVideo.nativeElement;

    video.muted = true;

    video.play()
      .then(() => {
        console.log('🎥 Hero started');
      })
      .catch(error => {
        console.error('❌ Hero gagal play:', error);
      });

  }

}