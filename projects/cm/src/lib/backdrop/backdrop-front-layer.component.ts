import { Component } from '@angular/core';

@Component({
  selector: 'cm-backdrop-front-layer',
  template: `
    <ng-content select="cm-backdrop-front-layer-subtitle"></ng-content>
    <ng-content select="cm-backdrop-front-layer-content"></ng-content>    
  `,
  styles: [`
    :host{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        bottom: 0;
        height: 100%;
        overflow: hidden;        
        position: fixed;
        top: 56px;
        width: 100%;
    }
  `]
})
export class BackdropFrontLayerComponent { }