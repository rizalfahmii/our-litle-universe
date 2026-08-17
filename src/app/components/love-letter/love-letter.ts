import { Component } from '@angular/core';

@Component({
  selector: 'app-love-letter',
  imports: [],
  templateUrl: './love-letter.html',
  styleUrl: './love-letter.css'
})
export class LoveLetter {

  isOpen = false;

  openLetter(): void {
    this.isOpen = true;
  }

  closeLetter(): void {
    this.isOpen = false;
  }

}