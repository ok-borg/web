import {BorgApi, BorgApiOperation} from './BorgApi';
import {ApiMethod} from './Main';
import {equals, forEach} from 'ramda';

describe('Common/api/BorgApi', () => {
    describe('getMethod', () => {
        interface IScenario {
            config: BorgApi;
            expectedMethod: ApiMethod;
        }

        const scenarios: IScenario[] = [
            {config: new BorgApi(BorgApiOperation.Search), expectedMethod: ApiMethod.POST},
        ];

        const functor = (scenario: IScenario) => {
            it('should correctly return method for ' + scenario.config.operation, () => {
                expect(scenario.config.getMethod()).toBe(scenario.expectedMethod);
            });
        };

        forEach(functor, scenarios);
    });

    describe('getBaseUrl', () => {
        interface IScenario {
            config: BorgApi;
            expectedBaseURL: string;
        }

        const scenarios: IScenario[] = [
            {
                config: new BorgApi(BorgApiOperation.Search),
                expectedBaseURL: 'https://ok-b.org:9993'
            }
        ];

        const functor = (scenario: IScenario) => {
            it('should correctly return baseUrl for ' + scenario.config.operation, () => {
                expect(scenario.config.getBaseUrl()).toBe(scenario.expectedBaseURL);
            });
        };

        forEach(functor, scenarios);
    });

    describe('getUrl', () => {
        interface IScenario {
            config: BorgApi;
            expectedUrl: string;
        }

        const scenarios: IScenario[] = [
            {config: new BorgApi(BorgApiOperation.Search), expectedUrl: '/users/login'}
        ];

        const functor = (scenario: IScenario) => {
            it('should correctly return url for ' + scenario.config.operation, () => {
                expect(scenario.config.getUrl()).toBe(scenario.expectedUrl);
            });
        };

        forEach(functor, scenarios);
    });

    describe('getParams', () => {
        interface IScenario {
            config: BorgApi;
            expectedParams: Object|undefined;
        }

        const scenarios: IScenario[] = [
            {config: new BorgApi(BorgApiOperation.Search), expectedParams: undefined},
        ];

        const functor = (scenario: IScenario) => {
            it('should correctly return params for ' + scenario.config.params, () => {
                expect(equals(scenario.config.getParams(), scenario.expectedParams)).toBe(true);
            });
        };

        forEach(functor, scenarios);
    });

    describe('getData', () => {
        interface IScenario {
            config: BorgApi;
            expectedData: Object|undefined;
        }

        const scenarios: IScenario[] = [
            {
                config: new BorgApi(BorgApiOperation.Search, undefined, undefined),
                expectedData: undefined
            }
        ];

        const functor = (scenario: IScenario) => {
            xit('should correctly return data for ' + scenario.config.data, () => {
                expect(equals(scenario.config.getData(), scenario.expectedData)).toBe(true);
            });
        };

        forEach(functor, scenarios);
    });

    describe('isProtected', () => {
        interface IScenario {
            config: BorgApi;
            expected: boolean;
        }

        const scenarios: IScenario[] = [
            {config: new BorgApi(BorgApiOperation.Search), expected: false}
        ];

        const functor = (scenario: IScenario) => {
            it('should correctly return isProtected for ' + scenario.config.operation, () => {
                expect(scenario.config.isProtected()).toBe(scenario.expected);
            });
        };

        forEach(functor, scenarios);
    });

    describe('getSampleData', () => {
        interface IScenario {
            config: BorgApi;
            expected: null;
        }

        const scenarios: IScenario[] = [
            {
                config: new BorgApi(BorgApiOperation.Search),
                expected: null
            }
        ];

        const functor = (scenario: IScenario) => {
            xit('should correctly return getSampleData for ' + scenario.config.operation, () => {
                expect(equals(scenario.config.getSampleData(), scenario.expected)).toBe(true);
            });
        };

        forEach(functor, scenarios);
    });
});
