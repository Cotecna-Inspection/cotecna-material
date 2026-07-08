import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'comat-backdrop-back-layer-content',
    template: `
    <ng-content></ng-content>
  `,
    styles: [`
    :host{
      overflow-y: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class BackdropBackLayerContentComponent { }
