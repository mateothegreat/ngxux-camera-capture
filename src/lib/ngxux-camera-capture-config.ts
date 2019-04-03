export class NgxuxCameraCaptureConfig {

    public API_BASE: string;
    public ROUTE: string;

    public constructor(obj: {

        API_BASE: string,
        ROUTE: string,

    }) {

        this.API_BASE = obj.API_BASE;
        this.ROUTE = obj.ROUTE;

    }

}
