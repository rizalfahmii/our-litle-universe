import {
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
export class Hero {

  @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  playVideo(): void {

    const video = this.heroVideo.nativeElement;

    video.muted = true;
    video.volume = 0;

    video.play()
      .then(() => {
        console.log('🎥 HERO BERHASIL PLAY');
      })
      .catch((error) => {
        console.error('❌ HERO GAGAL PLAY:', error);
      });

  }
}