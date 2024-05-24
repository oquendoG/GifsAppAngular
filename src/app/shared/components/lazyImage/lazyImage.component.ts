import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;
  constructor() {}

  ngOnInit() {
    if (!this.url) throw new Error('Url is required');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
