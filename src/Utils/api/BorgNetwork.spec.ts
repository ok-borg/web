import {BorgApi, BorgApiOperation} from './BorgApi';
import {equals, forEach} from 'ramda';
import {BorgNetwork} from './BorgNetwork';
import {StubPieNetwork} from './StubBorgNetwork';
import {BorgApiMock} from './BorgApiMock';
import {ApiMethod} from './Main';

describe('Common/api/BorgNetwork', () => {
    describe('getObservable', () => {
        let provider: BorgNetwork;

        beforeEach(() => {
            provider = new BorgNetwork();
        });

        it('calls getHttpInstance', () => {
            const ApiConfig = new BorgApi(BorgApiOperation.Search);
            spyOn(provider, 'getHttpInstance').and.callThrough();

            provider.getObservable(ApiConfig);

            expect(provider.getHttpInstance).toHaveBeenCalledTimes(1);
            expect(provider.getHttpInstance).toHaveBeenCalledWith(ApiConfig);
        });

        it('calls getUrl', () => {
            const ApiConfig = new BorgApi(BorgApiOperation.Search);
            spyOn(ApiConfig, 'getUrl').and.callThrough();

            provider.getObservable(ApiConfig);

            expect(ApiConfig.getUrl).toHaveBeenCalledTimes(1);
        });

        it('calls getData', () => {
            const ApiConfig = new BorgApi(BorgApiOperation.Search);
            spyOn(ApiConfig, 'getData').and.callThrough();

            provider.getObservable(ApiConfig);

            expect(ApiConfig.getData).toHaveBeenCalledTimes(1);
        });

        it('calls getMethod', () => {
            const ApiConfig = new BorgApi(BorgApiOperation.Search);
            spyOn(ApiConfig, 'getMethod').and.callThrough();

            provider.getObservable(ApiConfig);

            expect(ApiConfig.getMethod).toHaveBeenCalledTimes(1);
        });

        interface IScenario {
            config: BorgApiMock;
            expectedMethod: string;
            expectedURL: string;
            expectedData: any;
        }

        const testUrl = '/url/test';
        const scenarios: IScenario[] = [
            {
                config: new BorgApiMock(ApiMethod.GET, testUrl),
                expectedMethod: 'GET',
                expectedURL: testUrl,
                expectedData: undefined
            },
            {
                config: new BorgApiMock(ApiMethod.POST, testUrl, {test: 'test'}),
                expectedMethod: 'POST',
                expectedURL: testUrl,
                expectedData: {test: 'test'}
            },
            {
                config: new BorgApiMock(ApiMethod.PUT, testUrl, {test: 'test'}),
                expectedMethod: 'PUT',
                expectedURL: testUrl,
                expectedData: {test: 'test'}
            },
            {
                config: new BorgApiMock(ApiMethod.DELETE, testUrl),
                expectedMethod: 'DELETE',
                expectedURL: testUrl,
                expectedData: undefined
            }
        ];

        const functor = (scenario: IScenario) => {
            it('should return the right observable for ' + scenario.expectedMethod, (done) => {
                const stubProvider = new StubPieNetwork();
                stubProvider.useConfigBaseURL = true;
                const source = stubProvider.getObservable(scenario.config);
                source.subscribe(response => {
                    console.log(response.config);
                    expect(response.config.method.toUpperCase()).toBe(scenario.expectedMethod);
                    expect(response.config.url).toBe(scenario.config.getBaseUrl() + scenario.expectedURL);
                    expect(equals(scenario.config.data, scenario.expectedData)).toBe(true);
                    done();
                });
            });
        };

        forEach(functor, scenarios);

    });

    describe('getHttpInstance', () => {
        interface IScenario {
            config: BorgApi;
            expectedBaseURL: string;
            expectedParams: Object | undefined;
        }

        const subjectConfig = new BorgApi(BorgApiOperation.Search);
        const subjectConfig2 = new BorgApi(BorgApiOperation.Search, {test: 'test'});

        const scenarios: IScenario[] = [
            {config: subjectConfig, expectedBaseURL: subjectConfig.getBaseUrl(), expectedParams: undefined},
            {
                config: subjectConfig2,
                expectedBaseURL: subjectConfig2.getBaseUrl(),
                expectedParams: subjectConfig2.getParams()
            }
        ];

        const functor = (scenario: IScenario) => {
            it('should correctly return axios instance for ' + scenario.config.operation, () => {
                const instance = new BorgNetwork().getHttpInstance(scenario.config);
                expect(instance.defaults.baseURL).toBe(scenario.expectedBaseURL);
                expect(equals(instance.defaults.params, scenario.expectedParams)).toBe(true);
            });
        };

        forEach(functor, scenarios);
    });

    describe('request', () => {
        let provider: BorgNetwork;

        beforeEach(() => {
            provider = new BorgNetwork();
        });

        it('should call getObservable', () => {
            spyOn(provider, 'getObservable').and.callThrough();

            provider.request(BorgApiOperation.Search, undefined, undefined);

            const ApiConfig = new BorgApi(BorgApiOperation.Search);

            expect(provider.getObservable).toHaveBeenCalledTimes(1);
            expect(provider.getObservable).toHaveBeenCalledWith(ApiConfig);
        });

        it('should return an observable', () => {
            const subject = provider.request(BorgApiOperation.Search, undefined, undefined);

            expect(equals(typeof subject, 'object')).toBe(true);
        });

    });

});
