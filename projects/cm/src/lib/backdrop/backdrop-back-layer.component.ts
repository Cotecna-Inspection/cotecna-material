import { Component } from '@angular/core';

@Component({
  selector: 'cm-backdrop-back-layer',
  template: `
    <ng-content select="cm-backdrop-back-layer-toolbar"></ng-content>
    <ng-content select="cm-backdrop-back-layer-content"></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 56px;      
      width: 100%;
    }
  `]
})
export class BackdropBackLayerComponent { }