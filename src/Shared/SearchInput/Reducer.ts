import {Record} from "immutable";
import {IAction, REQUEST_SEARCH_DATA, RECEIVE_SEARCH_DATA} from './Actions';
import {BorgSearchResponse} from '../../Models/Topic/Main';

const State = Record({
    query: '',
    data: null,
    isFetching: false
});

export class SearchState extends State {
    query: string;
    data: BorgSearchResponse | null;
    isFetching: boolean;
}

export default function SearchReducer(state: SearchState | undefined,
                                      action: IAction<BorgSearchResponse | undefined>): SearchState {
    if (!state) state = new SearchState();

    switch (action.type) {
        case REQUEST_SEARCH_DATA:
            return state.merge({
                query: action.query,
                isFetching: true
            }) as SearchState;
        case RECEIVE_SEARCH_DATA:
            return state.merge({
                query: action.query,
                data: action.data,
                isFetching: false,
            }) as SearchState;
        default:
            return state;
    }
}