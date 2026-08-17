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

    // Pastikan browser menganggap video silent
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    // Mobile compatibility
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', '');

    // Tunggu video siap
    if (video.readyState >= 3) {

      this.startVideo();

    } else {

      video.addEventListener(
        'canplay',
        () => {
          this.startVideo();
        },
        { once: true }
      );

    }
  }

  private startVideo(): void {

    const video = this.heroVideo.nativeElement;

    video.muted = true;

    video.play()
      .then(() => {
        console.log('🎥 HERO AUTOPLAY BERHASIL');
      })
      .catch(error => {
        console.error('❌ HERO AUTOPLAY GAGAL:', error);
      });

  }

  playVideo(): void {

    const video = this.heroVideo.nativeElement;

    video.muted = true;

    video.play()
      .then(() => {
        console.log('🎥 HERO PLAY BERHASIL');
      })
      .catch(error => {
        console.error('❌ HERO PLAY GAGAL:', error);
      });

  }
}