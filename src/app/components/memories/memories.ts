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

  // =========================
  // MEMORY DATA
  // =========================

  memories: Memory[] = [

    {
      type: 'image',
      src: '/photos/photo-1.jpeg',
      title: 'Our First Memory',
      date: '29 sept 2025',
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
    },


  ];


  // =========================
  // SELECTED MEMORY
  // =========================

  selectedMemory: Memory | null = null;


  // =========================
  // GET ALL VIDEO ELEMENTS
  // =========================

  @ViewChildren('memoryVideo')
  videos!: QueryList<ElementRef<HTMLVideoElement>>;


  // =========================
  // AFTER HTML RENDERED
  // =========================

  ngAfterViewInit(): void {

    this.playVideos();

  }


  // =========================
  // PLAY ALL MEMORY VIDEOS
  // =========================

  private playVideos(): void {

    this.videos.forEach(
      (videoRef: ElementRef<HTMLVideoElement>) => {

        const video =
          videoRef.nativeElement;

        // Make sure browser knows
        // this video has no sound.

        video.muted = true;

        video.volume = 0;


        video.play()
          .then(() => {

            console.log(
              '🎥 Memory autoplay berhasil:',
              video.currentSrc
            );

          })
          .catch((error) => {

            console.error(
              '❌ Memory autoplay gagal:',
              error
            );

          });

      }
    );

  }


  // =========================
  // OPEN MEMORY
  // =========================

  openMemory(memory: Memory): void {

    this.selectedMemory = memory;

    // Stop page scrolling
    // while fullscreen viewer is open.

    document.body.style.overflow = 'hidden';

  }


  // =========================
  // CLOSE MEMORY
  // =========================

  closeMemory(): void {

    this.selectedMemory = null;

    // Enable page scrolling again.

    document.body.style.overflow = '';

  }

}