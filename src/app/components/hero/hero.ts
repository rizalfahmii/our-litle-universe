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

    // Pastikan muted
    video.muted = true;
    video.defaultMuted = true;

    // Mobile compatibility
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('autoplay', '');

    /*
     * Jangan langsung play.
     * Tunggu video benar-benar siap.
     */

    if (video.readyState >= 3) {

      this.startVideo(video);

    } else {

      video.addEventListener(
        'canplay',
        () => {
          this.startVideo(video);
        },
        { once: true }
      );

    }
  }


  private startVideo(
    video: HTMLVideoElement
  ): void {

    video.muted = true;

    video.play()
      .then(() => {

        console.log(
          '🎥 HERO BERHASIL PLAY'
        );

      })
      .catch(error => {

        console.error(
          '❌ HERO PLAY GAGAL:',
          error
        );

      });
  }


  playVideo(): void {

    const video = this.heroVideo.nativeElement;

    video.muted = true;

    video.play()
      .then(() => {

        console.log(
          '🎥 Hero started manually'
        );

      })
      .catch(error => {

        console.error(
          '❌ Hero gagal play:',
          error
        );

      });

  }

}