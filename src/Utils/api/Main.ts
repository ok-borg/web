import {Observable} from '@reactivex/rxjs';

export enum ApiMethod { UNKNOWN = 1, GET, POST, PUT, DELETE }

export interface INetwork<C> {
    getHttpInstance: (config: C) => Axios.AxiosInstance;
    request: <T, U>(operation: T, params?: Object, data?: U) => Observable<any>;
}

export interface IApi<U> {
    readonly operation: U;
    readonly params: Object | undefined;
    readonly data: any | undefined;
    getMethod: () => ApiMethod;
    getBaseUrl: () => string;
    getUrl: () => string;
    getParams: () => Object | undefined;
    getData: () => any | undefined;
    isProtected: () => boolean;
}
