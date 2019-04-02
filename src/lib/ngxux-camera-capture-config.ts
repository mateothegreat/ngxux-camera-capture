export class NgxuxCameraCaptureConfig {

    public API_BASE: string;
    public ROUTE: string;
    public JWT_TOKEN: string;

    public constructor(obj: {

        API_BASE: string,
        ROUTE: string,
        JWT_TOKEN: string

    }) {

        this.API_BASE = obj.API_BASE;
        this.ROUTE = obj.ROUTE;
        this.JWT_TOKEN = obj.JWT_TOKEN;

    }

}
