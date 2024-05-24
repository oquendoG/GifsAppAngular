import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-component.style.scss'
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  public get gifs(): Gif[] {
    return this.gifsService.gifsList;
  }
}
