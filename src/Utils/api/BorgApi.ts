import {IApi, ApiMethod} from './Main';

export enum BorgApiOperation {
    Search
}

export class BorgApi implements IApi<BorgApiOperation> {
    readonly operation: BorgApiOperation;
    readonly params: Object|undefined;
    readonly data: any| undefined;

    constructor(operation: BorgApiOperation, params ?: Object, data ?: any) {
        this.operation = operation;
        this.params = params;
        this.data = data;
    }

    getMethod(): ApiMethod {
        switch (this.operation) {
            case BorgApiOperation.Search:
                return ApiMethod.GET;
            default:
                return ApiMethod.UNKNOWN;
        }
    }

    getBaseUrl(): string {
        switch (this.operation) {
            default:
                return 'https://ok-b.org:9993'; // TODO Define in this in the environment
        }
    }

    getUrl(): string {
        switch (this.operation) {
            case BorgApiOperation.Search:
                return '/v1/query';
            default:
                return '';
        }
    }

    getParams(): Object | undefined {
        return this.params;
    }

    getData(): any | undefined {
        return this.data;
    }

    isProtected(): boolean {
        switch (this.operation) {
            default:
                return false;
        }
    }

    getSampleData() {
        switch (this.operation) {
            case BorgApiOperation.Search:
                return require('./stubs/QueryASD.ts');
            default:
                return null;
        }
    }
}
