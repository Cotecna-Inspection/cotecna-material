import { Component } from '@angular/core';

@Component({
  selector: 'comat-backdrop-back-layer-content',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host{
      overflow-y: auto;
    }
  `]
})
export class BackdropBackLayerContentComponent { }