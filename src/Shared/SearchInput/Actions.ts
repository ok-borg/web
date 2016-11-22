import {INetwork} from '../../Utils/api/Main';
import {BorgNetwork} from '../../Utils/api/BorgNetwork';
import {BorgApi, BorgApiOperation} from '../../Utils/api/BorgApi';
import {BorgSearchResponse, ISearchReponse} from '../../Models/Topic/Main';

export const REQUEST_SEARCH_DATA = 'REQUEST_SEARCH_DATA';
export function requestSearchData(): IAction<undefined> {
  return {
    type: REQUEST_SEARCH_DATA,
    query: undefined,
    data: undefined
  };
}

export const RECEIVE_SEARCH_DATA = 'RECEIVE_SEARCH_DATA';
export function receiveSearchData(data: BorgSearchResponse): IAction<BorgSearchResponse> {
  return {
    type: RECEIVE_SEARCH_DATA,
    query: undefined,
    data
  };
}

export function searchData(query: string, provider: INetwork<BorgApi> = new BorgNetwork()) {
  return (dispatch: Redux.Dispatch<any>) => {
    dispatch(requestSearchData() as any);
    console.log('Request : ' + query);
    provider.request(
      BorgApiOperation.Search, {'q': query}, undefined
    ).subscribe((response: ISearchReponse) => {
      // const tmpJson = require('../../Utils/api/stubs/QueryASD.ts').default;
      // const tmpResponse = new BorgSearchResponse(tmpJson);
      // console.log('tmpResponse', tmpResponse);
      // dispatch(receiveSearchData(tmpResponse) as any);
      dispatch(receiveSearchData(new BorgSearchResponse(response)) as any);
    }, (error: any) => {
      console.log(error);
    });
  };
}

export interface IAction<T> {
  type: string;
  query: string | undefined;
  data: T;
}
