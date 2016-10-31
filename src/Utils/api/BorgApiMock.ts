import {BorgApiOperation, BorgApi} from './BorgApi';
import {ApiMethod} from './Main';

export class BorgApiMock extends BorgApi {
    baseUrl: string = 'http://localhost:1234/fakeBaseUrl';
    method: ApiMethod = ApiMethod.UNKNOWN;
    url: string;
    data: any | undefined;

    constructor(method: ApiMethod, url: string, data?: any) {
        super(BorgApiOperation.Search);
        this.method = method;
        this.url = url;
        this.data = data;
    }

    getMethod(): ApiMethod {
        return this.method;
    }

    getUrl(): string {
        return this.url;
    }

    getData(): any | undefined {
        return this.data;
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }

}
