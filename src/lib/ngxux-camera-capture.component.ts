import { Component }                                from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject }                      from 'rxjs';
import { NgxuxCameraCaptureService }                from './ngxux-camera-capture.service';

@Component({
    selector: 'ngxux-camera-capture',
    template: `

        <ngxux-mat-dialog id="camera-capture"
                          [nextEnabled]="true">

            <div class="wrapper">

                <div class="box">

                    <webcam *ngIf="showWebcamContainer"
                            [trigger]="triggerObservable"
                            (imageCapture)="handleImage($event)"
                            [allowCameraSwitch]="allowCameraSwitch"
                            [switchCamera]="nextWebcamObservable"
                            [videoOptions]="videoOptions"
                            [imageQuality]="1"
                            (cameraSwitched)="cameraWasSwitched($event)"
                            (initError)="handleInitError($event)"></webcam>

                    <div *ngIf="showMessageConnecting" class="message loading">

                        Connecting your camera..

                    </div>

                </div>

                <div class="buttons">

                    <button *ngIf="!multipleWebcamsAvailable"
                            (click)="showNextWebcam(true);"
                            matTooltip="Switch cameras"
                            mat-raised-button>

                        <mat-icon>camera_rear</mat-icon>

                        Switch

                    </button>

                    <button color="warn"
                            (click)="triggerSnapshot()"
                            matTooltip="Take Picture and Save"
                            mat-raised-button>

                        <mat-icon>camera</mat-icon>

                        Save

                    </button>

                </div>
                <!--<button class="actionBtn" (click)="toggleWebcam();">Toggle Webcam</button>-->
                <!--<input id="cameraSwitchCheckbox" type="checkbox" [(ngModel)]="allowCameraSwitch"><label for="cameraSwitchCheckbox">Allow Camera Switch</label>-->
                <!--DeviceId: {{ deviceId }}-->
                <!--<input id="deviceId" type="text" [(ngModel)]="deviceId" style="width: 500px">-->
                <!--<button (click)="showNextWebcam(deviceId);">Activate</button>-->

            </div>

            <div class="snapshot" *ngIf="webcamImage">
                <h2>Nice one!</h2>
                <img [src]="webcamImage.imageAsDataUrl"/>
            </div>

            <h4 *ngIf="errors.length > 0">Messages:</h4>
            <ul *ngFor="let error of errors">
                <li>{{error | json}}</li>
            </ul>

        </ngxux-mat-dialog>

    `,
    styleUrls: [ './ngxux-camera-capture.component.scss' ]
})
export class NgxuxCameraCaptureComponent {

    public showWebcamContainer: boolean = false;
    public showMessageConnecting: boolean = true;
    public showWebcam = true;
    public allowCameraSwitch = true;
    public multipleWebcamsAvailable = false;
    public deviceId: string;
    public videoOptions: MediaTrackConstraints = { height: { exact: 300 } };
    public errors: WebcamInitError[] = [];

    // latest snapshot
    public webcamImage: WebcamImage = null;

    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

    public constructor(public ngxuxCameraCaptureService: NgxuxCameraCaptureService) {

    }

    public get triggerObservable(): Observable<void> {

        return this.trigger.asObservable();

    }

    public get nextWebcamObservable(): Observable<boolean | string> {

        return this.nextWebcam.asObservable();

    }

    public ngOnInit(): void {

        WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {

            console.log(mediaDevices);

            if (mediaDevices.length > 0) {

                this.showMessageConnecting = false;
                this.showWebcamContainer = true;

                this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;

            } else {


            }

        });

    }

    public triggerSnapshot(): void {

        this.trigger.next();

    }

    public toggleWebcam(): void {

        this.showWebcam = !this.showWebcam;

    }

    public handleInitError(error: WebcamInitError): void {

        this.errors.push(error);

    }

    public showNextWebcam(directionOrDeviceId: boolean | string): void {

        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);

    }

    public handleImage(webcamImage: WebcamImage): void {

        console.info('received webcam image', webcamImage);

        this.webcamImage = webcamImage;

        this.ngxuxCameraCaptureService.upload(webcamImage);

    }

    public cameraWasSwitched(deviceId: string): void {

        console.log('active device: ' + deviceId);

        this.deviceId = deviceId;

    }

}
