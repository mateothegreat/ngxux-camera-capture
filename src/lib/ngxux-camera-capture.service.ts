import { HttpClient, HttpHeaders }         from '@angular/common/http';
import { Inject, Injectable }              from '@angular/core';
import { WebcamImage }                     from 'ngx-webcam';
import { NgxuxCameraCaptureConfigService } from './ngxux-camera-capture-config-service';

@Injectable({
    providedIn: 'root'
})
export class NgxuxCameraCaptureService {

    public files: any[];

    public constructor(@Inject(NgxuxCameraCaptureConfigService) private config,
                       private httpClient: HttpClient) {

    }

    public upload(webcamImage: WebcamImage): void {

        const formData: FormData = new FormData();

        // for (let i = 0; i < this.files.length; i++) {
        //
        //     formData.append(i.toString(), this.files[ i ], this.files[ i ].name);
        //
        // }

        formData.append('file', webcamImage.imageAsBase64);

        console.log(formData);

        this.httpClient.post(`${ this.config.API_BASE }${ this.config.ROUTE }`, formData, {

            headers: new HttpHeaders({ 'Authorization': `Bearer ${ this.config.JWT_TOKEN }` })

        }).subscribe((result: any) => {

            console.log(result);

        });

    }

}
