import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'comat-backdrop-front-layer-content',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host{
        display: flex;
        height: 100%;
        overflow-y: auto;
        width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class BackdropFrontLayerContentComponent {

}
