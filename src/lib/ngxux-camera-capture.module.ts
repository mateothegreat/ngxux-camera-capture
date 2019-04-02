import { CommonModule }                                     from '@angular/common';
import { ModuleWithProviders, NgModule }                    from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NgxuxMatDialogModule }                             from '@ngxux/ngxux-mat-dialog';
import { WebcamModule }                                     from 'ngx-webcam';
import { NgxuxCameraCaptureConfig }                         from './ngxux-camera-capture-config';
import { NgxuxCameraCaptureConfigService }                  from './ngxux-camera-capture-config-service';
import { NgxuxCameraCaptureComponent }                      from './ngxux-camera-capture.component';
import { NgxuxCameraCaptureService }                        from './ngxux-camera-capture.service';

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

    public static forRoot(config: NgxuxCameraCaptureConfig): ModuleWithProviders {

        return {

            ngModule: NgxuxCameraCaptureModule,
            providers: [

                NgxuxCameraCaptureService,

                {

                    provide: NgxuxCameraCaptureConfigService,
                    useValue: config

                }

            ]

        };

    }

}
