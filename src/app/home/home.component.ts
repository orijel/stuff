import { LightboxConfig } from './../lightbox-module/lightbox-config.service';
import { Lightbox } from './../lightbox-module/lightbox.service';
import { GalleryModalComponent } from './gallery-modal/gallery-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { MarkerOptions } from '@agm/core/services/google-maps-types';
import { AgmMarker } from '@agm/core/directives/marker';
import * as _ from 'lodash';
import { SwiperConfigInterface, SwiperComponent } from 'ngx-swiper-wrapper';
import { MatDialog } from '@angular/material';
import $ from 'jquery';

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
  styleUrls: ['./home.component.scss'],
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
  public medias: any;
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  public markers: MarkerOptions[] = [];
  public items: any[];
  public config: SwiperConfigInterface;
  public slideIndex: number;
  public galleryConfig: SwiperConfigInterface = {
    // direction: 'horizontal',
    // slidesPerView: 1,
    effect: 'fade',
    // autoHeight: true,
    navigation: true
  };
  // @ViewChild('swiper') public _swiper: SwiperComponent;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title,
    private _dialog: MatDialog,
    private _lightbox: Lightbox,
    private _lightboxConfig: LightboxConfig
  ) { }

  public ngOnInit() {
    this.medias = [
      {
        src: 'http://via.placeholder.com/350x150',
        type: 'image',
        height: 600,
        width: 300
      },
      {
        src: 'http://via.placeholder.com/500x550',
        type: 'image',
        height: 500,
        width: 250
      },
      {
        src: 'http://via.placeholder.com/1050x950',
        type: 'image',
        height: 600,
        width: 300
      },
      {
        src: 'https://youtu.be/XQu8TTBmGhA',
        type: 'video',
        height: 500,
        width: 250
      },
      {
        src: 'https://youtu.be/XQu8TTBmGhA',
        type: 'video',
        height: 600,
        width: 300
      },
    ];
    this._lightboxConfig.showImageNumberLabel = true;
    this._lightboxConfig.disableScrolling = true;
    this.items = [];
    for (let i = 0; i < 6; i++) {
      this.items.push(i);
    }
    this.config = {
      initialSlide: this.items.length - 1,
      direction: 'vertical',
      slidesPerView: 2,
      keyboard: true,
      pagination: true,
    };
    this.markers = [
      { position: { lat: 51.678418, lng: 7.809007 }, clickable: true },
      { position: { lat: 51.678418, lng: 7.895507 }, clickable: true },
    ];
    // setInterval(() => {
    //   this.goToPrevSlide();
    // }, 2000);
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  // public goToPrevSlide() {
  //   this._swiper.directiveRef.prevSlide(1000);
  // }

  // public addSlide() {
  //   this.items.splice(0, 0, this.items.length);
  //   this._swiper.directiveRef.setIndex(this._swiper.directiveRef.getIndex() + 1, 0, true);
  // }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  public openGalleryModal() {
    this._dialog.open(GalleryModalComponent, {
      data: this.medias
    });
  }

  public open(index: number) {
    this._lightbox.open(this.medias, index);
  }

  public onIndexChange(index) {
    $('#auto-height-gallery .swiper-container .swiper-wrapper')
      .css('height', (this.medias[index].height + 4) + 'px')
    // $('#auto-height-gallery .swiper-container')
    //   .css('width', (this.medias[index].width + 4) + 'px');
  }
}
