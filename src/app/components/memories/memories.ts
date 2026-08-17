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
      description: 'A moment I never want to forget.'
    },

    {
      type: 'video',
      src: '/photos/photo-4.mp4',
      title: 'Our Little Adventure',
      date: '11 August 2025',
      description: 'Another little chapter of our story.'
    },

    {
      type: 'image',
      src: '/photos/photo-5.jpeg',
      title: 'Our Random Picture',
      date: '11 August 2025',
      description: 'Another little chapter of our story.'
    }

  ];


  selectedMemory: Memory | null = null;


  @ViewChildren('memoryVideo')
  videos!: QueryList<ElementRef<HTMLVideoElement>>;


  // =====================================
  // SETELAH VIDEO SELESAI DIBUAT ANGULAR
  // =====================================

  ngAfterViewInit(): void {

    // Tunggu sebentar supaya video
    // benar-benar sudah masuk DOM.

    setTimeout(() => {

      this.playAllVideos();

    }, 100);

  }


  // =====================================
  // AUTOPLAY SEMUA VIDEO
  // =====================================

  private playAllVideos(): void {

    this.videos.forEach(
      (videoRef) => {

        const video =
          videoRef.nativeElement;


        // Pastikan silent
        video.muted = true;
        video.defaultMuted = true;
        video.volume = 0;


        // Mobile compatibility
        video.setAttribute(
          'muted',
          ''
        );

        video.setAttribute(
          'playsinline',
          ''
        );

        video.setAttribute(
          'webkit-playsinline',
          ''
        );


        // Coba play
        video.play()
          .then(() => {

            console.log(
              '🎥 Memory autoplay berhasil:',
              video.currentSrc
            );

          })
          .catch(error => {

            console.error(
              '❌ Memory autoplay gagal:',
              video.currentSrc,
              error
            );

          });

      }
    );

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