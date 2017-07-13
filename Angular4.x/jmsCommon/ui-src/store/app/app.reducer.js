const pages = [
  'AngularCorePage',
  'ButtonPage',
  'DropDownPage',
  'GalleryPage',
  'InputPage',
  'ListPage',
  'PageIndicatorPage',
  'ProgressBarPage',
  'SliderPage',
  'TooltipPage',
  'TreeViewPage'
];
const initialAppState = {
  currentPage: pages[10]
};

export default function handleActions(state = initialAppState, action) {
  let _appState = Object.assign({}, state);
  switch (action.type) {
    case 'AppNavMenuAction':
      _appState.currentPage = action.newPage;
      return _appState;
    default:
      return state;
  }
}
