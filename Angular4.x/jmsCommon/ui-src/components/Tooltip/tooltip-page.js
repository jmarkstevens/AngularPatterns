import {Component} from '@angular/core';

import {hoverValues} from './tooltip.data';

@Component({
  selector: 'tooltip-page',
  template: require('./tooltip-page.html'),
  styles: [require('./tooltip-page.css')]
})
export class TooltipPage {
  hoverValues = hoverValues;
  adjust = {left: 0, top: 94};
}
