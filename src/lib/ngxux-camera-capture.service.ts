import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable }              from '@angular/core';
import { WebcamImage }             from 'ngx-webcam';

@Injectable({
    providedIn: 'root'
})
export class NgxuxCameraCaptureService {

    public files: any[];

    public constructor(private httpClient: HttpClient) {

    }

    public upload(webcamImage: WebcamImage): void {

        const formData: FormData = new FormData();

        // for (let i = 0; i < this.files.length; i++) {
        //
        //     formData.append(i.toString(), this.files[ i ], this.files[ i ].name);
        //
        // }

        console.log(webcamImage.imageAsBase64);

        formData.append('file', webcamImage.imageAsBase64);

        console.log(formData);

        this.httpClient.post('http://localhost:10081/attachments/upload', formData, {

            headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })

        }).subscribe((result: any) => {

            console.log(result);

        });

    }

}
