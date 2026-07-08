import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'comat-backdrop-back-layer-toolbar',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})
export class BackdropBackLayerToolbarComponent { }
