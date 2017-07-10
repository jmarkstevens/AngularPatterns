import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'gallery-page',
  template: require('./gallery-page.html'),
  styles: [require('./gallery-page.css')]
})
export class GalleryPage implements OnDestroy {
  showGallery = 0;
  
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToState);
    this.subscribeToState(1);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeToState = first => {
    this.picList = this.ngRedux.getState().galleryState.picList;
    if (this.showGallery === 0) this.showGallery = 1;
    let isCurrentPage = this.ngRedux.getState().appState.currentPage === 'GalleryPage';
    if (!first && isCurrentPage) this.changeDetectorRef.detectChanges();
  }
}
GalleryPage.parameters = [[ChangeDetectorRef], [NgRedux]];
