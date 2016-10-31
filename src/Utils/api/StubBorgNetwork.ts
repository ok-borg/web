import * as axios from 'axios';
import {BorgApi} from './BorgApi';
import {BorgNetwork} from './BorgNetwork';

export class StubBorgNetwork extends BorgNetwork {
    delay: number;
    status: number;
    useConfigBaseURL: boolean = false;

    constructor(delay = 0, status = 200) {
        super();
        this.delay = delay;
        this.status = status;
    }

    getHttpInstance(config: BorgApi) {
        const delay = this.delay;
        const status = this.status;
        const useConfigBaseUrl = this.useConfigBaseURL;

        let instance = axios.create({
            baseURL: useConfigBaseUrl ? config.getBaseUrl() : 'http://localhost:1234/fail/'
        });

        instance.interceptors.response.use((response: any) => {
            return response;
        }, (error: any) => {
            return new Promise((resolve, _) => {
                setTimeout(() => {
                    resolve({
                        data: config.getSampleData(),
                        status,
                        statusText: '',
                        headers: {},
                        config: error.config
                    });
                }, delay);
            });
        });

        return instance;
    }
}
