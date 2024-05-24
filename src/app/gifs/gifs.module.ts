import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/gifs-search-box.component';
import { GifsComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifsComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
