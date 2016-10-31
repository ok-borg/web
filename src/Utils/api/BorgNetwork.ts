import {Observable} from '@reactivex/rxjs';
import {INetwork, ApiMethod} from './Main';
import {BorgApi, BorgApiOperation} from './BorgApi';
import * as axios from 'axios';

export class BorgNetwork implements INetwork<BorgApi> {
    getObservable(config: BorgApi) {
        const
            httpInstance = this.getHttpInstance(config),
            url = config.getUrl(),
            data = config.getData();

        let source: Observable<any>;

        switch (config.getMethod()) {
            case ApiMethod.GET:
                source = Observable.fromPromise(httpInstance.get(url));
                break;
            case ApiMethod.POST:
                source = Observable.fromPromise(httpInstance.post(url, data));
                break;
            case ApiMethod.PUT:
                source = Observable.fromPromise(httpInstance.put(url, data));
                break;
            case ApiMethod.DELETE:
                source = Observable.fromPromise(httpInstance.delete(url));
                break;
            default:
                source = Observable.throw('Error!');
        }

        return source;
    }

    getHttpInstance(config: BorgApi): Axios.AxiosInstance {
        let instance = axios.create({
            baseURL: config.getBaseUrl()
        });

        const params = config.getParams();

        if (params) {
            instance.defaults.params = params;
        }

        return instance;
    }

    request<T>(operation: BorgApiOperation, params?: Object, data?: T) {
        const ApiConfig = new BorgApi(operation, params, data);

        return this.getObservable(ApiConfig);
    };
}
