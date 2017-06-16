const merlinLocation = {lat: 32.939095, lng: -117.043607};
const homeLocation = {lat: 33.264611, lng: -117.083043};
const nyLocation = {lat: 40.708314, lng: -74.101025};
const flLocation = {lat: 26.247621, lng: -80.110884};

const initialMapState = {
  mapZoom: 3,
  mapCenter: {lat: 38.0, lng: -97.0},
  mapInitialized: false,
  markers: [{position: merlinLocation}, {position: homeLocation}, {position: nyLocation}, {position: flLocation}]
};

export default function handleActions(state = initialMapState, action) {
  let _mapState = Object.assign({}, state);
  switch (action.type) {
    case 'MapChangeZoomAction':
      _mapState.mapZoom = action.newZoom;
      return _mapState;
    case 'MapChangeCenterAction':
      _mapState.mapCenter = action.newCenter;
      return _mapState;
    case 'MapInitializedAction':
      _mapState.mapInitialized = true;
      return _mapState;
    default:
      return state;
  }
}
