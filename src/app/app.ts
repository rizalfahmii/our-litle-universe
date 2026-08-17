import {
  Component,
  ViewChild
} from '@angular/core';

import { Opening } from './components/opening/opening';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Memories } from './components/memories/memories';
import { OurStory } from './components/our-story/our-story';
import { LoveLetter } from './components/love-letter/love-letter';  

@Component({
  selector: 'app-root',

  imports: [
    Opening,
    Navbar,
    Hero,
    Memories,
    OurStory,
      LoveLetter
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @ViewChild('hero')
  hero!: Hero;


 enterStory(): void {
  this.hero.playVideo();
}
}