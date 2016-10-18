import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'icon',
  styleUrls: ['app/styles/icon.min.css'],
  template: `
    <svg [attr.class]="'icon icon--' + name + ' ' + className">
      <use [attr.xlink:href]="'#icon-' + name"></use>
    </svg>
    
  `
})
export class IconComponent {
  @Input() className = '';
  @Input() name: string;
}
