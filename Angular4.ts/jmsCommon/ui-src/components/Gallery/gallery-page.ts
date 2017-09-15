import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'gallery-page',
  template: require('./gallery-page.html'),
  styles: [require('./gallery-page.css')]
})
export class GalleryPage {
  showGallery = 0;
  
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.picList = this.ngRedux.getState().galleryState.picList;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToRedux2);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeToRedux2 = () => {
    this.picList = this.ngRedux.getState().galleryState.picList;
    this.currentPage = this.ngRedux.getState().appState.currentPage;
    this.showGalleryPage = this.currentPage === 'GalleryPage';
    if (this.showGallery === 0) this.showGallery = 1;
    if (this.showGalleryPage) this.changeDetectorRef.detectChanges();
  }
}
GalleryPage.parameters = [[ChangeDetectorRef], [NgRedux]];
