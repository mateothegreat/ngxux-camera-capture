import { Injectable }                                    from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { NgxuxCameraCaptureComponent }                   from './ngxux-camera-capture.component';

@Injectable({
    providedIn: 'root'
})
export class NgxuxCameraCaptureDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(NgxuxCameraCaptureComponent, new NgxuxMatDialogSettings({

            id: 'camera-capture',

            title: 'Capture Photo(s)',

            width: '450px',
            height: '670px',

            nextShow: true,
            nextEnabled: true,
            nextLabel: 'Finished'

        }));

    }

}
