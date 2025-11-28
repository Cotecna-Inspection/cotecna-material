import { Component } from '@angular/core';

@Component({
  selector: 'comat-backdrop-back-layer',
  template: `
    <ng-content select="comat-backdrop-back-layer-toolbar"></ng-content>
    <ng-content select="comat-backdrop-back-layer-content"></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 56px;
      width: 100%;
    }
  `],
  imports: []
})
export class BackdropBackLayerComponent { }
