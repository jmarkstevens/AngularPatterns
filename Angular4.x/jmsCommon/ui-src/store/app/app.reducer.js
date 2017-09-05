const pages = [
  'AngularCorePage',
  'ButtonPage',
  'DropDownPage',
  'GalleryPage',
  'InputPage',
  'ListPage',
  'ModalPage',
  'PageIndicatorPage',
  'ProgressBarPage',
  'SliderPage',
  'TooltipPage',
  'TreeViewPage'
];
const randomPage = Math.floor(Math.random() * pages.length);

const initialAppState = {
  currentPage: pages[randomPage]
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
