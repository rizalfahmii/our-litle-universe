import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-opening',
  imports: [],
  templateUrl: './opening.html',
  styleUrl: './opening.css'
})
export class Opening {

  isOpeningComplete = false;

  @Output()
  storyEntered = new EventEmitter<void>();


  enterStory(): void {

    this.isOpeningComplete = true;

    // Kirim event ke App
    this.storyEntered.emit();

  }

}