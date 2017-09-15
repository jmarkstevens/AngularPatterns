import {Component, ChangeDetectorRef, HostListener} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {mapStyle} from './mapStyle';

import {mapChangeCenterAction, mapChangeZoomAction} from '../../store/map/map.actions';

let mapPageTemplate = `
  <div id="gmap" class="MapPage" [style.height]="getHeight()" [style.width]="getWidth()"></div>
`;

const inLine = [
  `.MapPage {
    overflow: hidden;
    padding: 0px;
  }`
];

function loadJS(src) {
  var ref = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

@Component({
  selector: 'Map-Page',
  template: mapPageTemplate,
  styles: inLine
})
export class MapPage implements OnDestroy, OnInit {
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.map = {};
    this.markers = [];
    this.mapStyle = 'MapPage';
    this.mapState = this.ngRedux.getState().mapState;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeMapPageRedux);
  }

  setMarkers = newMarkers => {
    let _this = this;
    for (let i = 0; i < newMarkers.length; i++) {
      let newMarker = new google.maps.Marker({
        position: newMarkers[i].position,
        map: _this.map
      });
      _this.markers.push(newMarker);
    }
  };

  getHeight() {
    return (window.innerHeight - 50) * 1 + 'px';
  }
  getWidth() {
    return window.innerWidth * 1 + 'px';
  }

  initMap = () => {
    let mapProp = {
      center: this.mapState.mapCenter,
      zoom: this.mapState.mapZoom,
      styles: mapStyle,
      mapTypeId: 'hybrid',
      gestureHandling: 'cooperative'
    };
    this.map = new google.maps.Map(document.getElementById('gmap'), mapProp);
    const _this = this;
    this.map.addListener('zoom_changed', function() {
      _this.ngRedux.dispatch(mapChangeZoomAction(_this.map.getZoom()));
    });
    this.map.addListener('center_changed', function() {
      const mapCenter = _this.map.getCenter();
      _this.ngRedux.dispatch(mapChangeCenterAction({lat: mapCenter.lat(), lng: mapCenter.lng()}));
    });
    this.setMarkers(this.mapState.markers);
  };

  ngOnInit() {
    window.initMap = this.initMap;
    if (typeof google !== 'undefined') {
      google.maps = null;
    }
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDcsh25a_J-Plt-TjiPNXDvZ-qMnuzt3vc&callback=initMap');
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeMapPageRedux = () => {
    this.mapState = this.ngRedux.getState().mapState;
    this.setMarkers(this.mapState.markers);
    this.appState = this.ngRedux.getState().appState;
    this.currentPage = this.appState.currentPage;
    this.showMapPage = this.currentPage === 'mapPage';
    if (this.showMapPage) this.changeDetectorRef.detectChanges();
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeDetectorRef.detectChanges();
  }
}
MapPage.parameters = [[ChangeDetectorRef], [NgRedux]];
