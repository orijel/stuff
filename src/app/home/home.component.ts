import { Component, OnInit, ViewChild } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { MarkerOptions } from '@agm/core/services/google-maps-types';
import { AgmMarker } from '@agm/core/directives/marker';
import * as _ from 'lodash';
import { SwiperConfigInterface, SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./home.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  public markers: MarkerOptions[] = [];
  public items: any[];
  public config: SwiperConfigInterface;
  public slideIndex: number;
  @ViewChild('swiper') public _swiper: SwiperComponent;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title
  ) { }

  public ngOnInit() {
    this.items = _.fill(Array(10), 1);
    this.config = {
      initialSlide: this.items.length - 1,
      direction: 'vertical',
      slidesPerView: 5,
      keyboard: true,
      pagination: true,
    };
    this.markers = [
      { position: { lat: 51.678418, lng: 7.809007 }, clickable: true },
      { position: { lat: 51.678418, lng: 7.895507 }, clickable: true },
    ];
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public goToPrevSlide() {
    this._swiper.directiveRef.prevSlide(2000);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
