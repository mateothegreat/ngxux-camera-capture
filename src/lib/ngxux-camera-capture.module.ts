import { CommonModule }                                     from '@angular/common';
import { NgModule }                                         from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NgxuxMatDialogModule }                             from '@ngxux/ngxux-mat-dialog';
import { WebcamModule }                                     from 'ngx-webcam';
import { NgxuxCameraCaptureComponent }                      from './ngxux-camera-capture.component';

@NgModule({

    declarations: [

        NgxuxCameraCaptureComponent

    ],

    imports: [

        CommonModule,
        WebcamModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        NgxuxMatDialogModule,

    ],

    exports: [

        NgxuxCameraCaptureComponent

    ],

    entryComponents: [

        NgxuxCameraCaptureComponent

    ]

})
export class NgxuxCameraCaptureModule {
}
