import { Component } from '@angular/core';

interface Story {
  year: string;
  title: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-our-story',
  imports: [],
  templateUrl: './our-story.html',
  styleUrl: './our-story.css'
})
export class OurStory {

  stories: Story[] = [

    {
      year: '2024',
      title: 'The Beginning',
      description:
        'The day our story started. We started as two people in the same circle, not knowing we d find something special in each other.',
      image: '/photos/photo-6.jpeg'
    },

    {
      year: '2025',
      title: 'Our First Adventure',
      description:
        'Our first little adventure together. Nothing too extraordinary, but somehow every moment felt special.',
      image: '/photos/photo-2.jpeg'
    },

    {
      year: '2026',
      title: 'Growing Together',
      description:
        'More days, more laughs, more memories. Slowly, our little universe became bigger.',
      image: '/photos/photo-7.jpeg'
    },

    {
      year: '2026',
      title: 'Still Us',
      description:
        'Through all the little things, we kept choosing each other.',
      image: '/photos/photo-8.jpeg'
    }

  ];

}