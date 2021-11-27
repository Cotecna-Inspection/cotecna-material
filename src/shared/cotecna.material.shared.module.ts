import { NgModule } from '@angular/core';
import { ContextualToolbarModule, BackdropModule, FabSpeedDialModule } from 'projects/cm/src/public_api';

@NgModule({
    declarations: [
    ],
    imports: [
        ContextualToolbarModule,
        BackdropModule,
        FabSpeedDialModule
    ],
    exports: [
        ContextualToolbarModule,
        BackdropModule,
        FabSpeedDialModule],
    providers: [],
})

export class CotecnaMaterialSharedModule { }