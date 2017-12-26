import { SwiperConfigInterface, SwiperComponent } from 'ngx-swiper-wrapper';
import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'gallery-modal',
  templateUrl: 'gallery-modal.component.html',
  styleUrls: ['gallery-modal.component.scss']
})

export class GalleryModalComponent implements OnInit, AfterViewInit {
  public galleryConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    effect: 'fade',
    autoHeight: true,
    navigation: true
  };

  @ViewChild('gallery') public gallery: SwiperComponent;

  constructor(
    public dialogRef: MatDialogRef<GalleryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public medias: Array<{ src: string; type: 'image' | 'video' }>
  ) { }

  public ngOnInit() {
  }

  public ngAfterViewInit(): void {
  }

  public onSlideChange() {
  }
}
