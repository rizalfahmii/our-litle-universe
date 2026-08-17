import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';

interface Memory {
  type: 'image' | 'video';
  src: string;
  title: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-memories',
  imports: [],
  templateUrl: './memories.html',
  styleUrl: './memories.css'
})
export class Memories implements AfterViewInit {

  memories: Memory[] = [

    {
      type: 'image',
      src: '/photos/photo-1.jpeg',
      title: 'Our First Memory',
      date: '29 Sept 2025',
      description:
        'A moment I never want to forget.'
    },

    {
      type: 'video',
      src: '/photos/photo-4.mp4',
      title: 'Our Little Adventure',
      date: '11 August 2025',
      description:
        'Another little chapter of our story.'
    },

    {
      type: 'image',
      src: '/photos/photo-5.jpeg',
      title: 'Our Random Picture',
      date: '11 August 2025',
      description:
        'Another little chapter of our story.'
    }

  ];

  selectedMemory: Memory | null = null;

  @ViewChildren('memoryVideo')
  videos!: QueryList<ElementRef<HTMLVideoElement>>;


  // =====================================
  // VIDEO SIAP
  // =====================================

  ngAfterViewInit(): void {

    this.prepareVideos();

    // Coba autoplay ketika video
    // sudah masuk ke layar.

    this.observeVideos();

  }


  // =====================================
  // SIAPKAN VIDEO UNTUK MOBILE
  // =====================================

  private prepareVideos(): void {

    this.videos.forEach(videoRef => {

      const video = videoRef.nativeElement;

      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('autoplay', '');

    });

  }


  // =====================================
  // OBSERVE VIDEO
  // =====================================

  private observeVideos(): void {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            const video =
              entry.target as HTMLVideoElement;


            if (entry.isIntersecting) {

              this.playVideo(video);

            } else {

              // Pause kalau sudah keluar layar
              video.pause();

            }

          });

        },
        {
          threshold: 0.3
        }
      );


    this.videos.forEach(videoRef => {

      observer.observe(
        videoRef.nativeElement
      );

    });

  }


  // =====================================
  // PLAY VIDEO
  // =====================================

  private playVideo(
    video: HTMLVideoElement
  ): void {

    video.muted = true;
    video.volume = 0;

    video.play()
      .then(() => {

        console.log(
          '🎥 MEMORY PLAY:',
          video.currentSrc
        );

      })
      .catch(error => {

        console.log(
          '⚠️ Browser menolak autoplay:',
          error
        );

      });

  }


  // =====================================
  // DIPANGGIL DARI APP
  // =====================================

  playVideos(): void {

    this.videos.forEach(videoRef => {

      const video =
        videoRef.nativeElement;

      this.playVideo(video);

    });

  }


  // =====================================
  // OPEN MEMORY
  // =====================================

  openMemory(memory: Memory): void {

    this.selectedMemory = memory;

    document.body.style.overflow = 'hidden';

  }


  // =====================================
  // CLOSE MEMORY
  // =====================================

  closeMemory(): void {

    this.selectedMemory = null;

    document.body.style.overflow = '';

  }

}