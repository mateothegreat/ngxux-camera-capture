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

        formData.set('file', webcamImage.imageAsBase64, 'test.jpeg');

        console.log(formData);

        // const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.config.JWT_TOKEN }`);
        const headers: HttpHeaders = new HttpHeaders({ 'enctype': 'multipart/form-data' });

        this.httpClient.post(`${ this.config.API_BASE }${ this.config.ROUTE }`, formData, { headers: headers }).subscribe((result: any) => {

            console.log(result);

        });

    }

}
