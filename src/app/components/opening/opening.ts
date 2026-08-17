import { Component } from '@angular/core';

@Component({
  selector: 'app-opening',
  imports: [],
  templateUrl: './opening.html',
  styleUrl: './opening.css'
})
export class Opening {

  isOpeningComplete = false;

  enterStory() {
    this.isOpeningComplete = true;
  }

}