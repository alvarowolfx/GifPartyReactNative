/**
 * Created by alvaroviebrantz on 06/03/16.
 * @flow
 */

import type { GiphyEntry } from '../models';
import type { Action } from '../actions/types';

export type TrendingState = {
  isFetching: boolean,
  entries: Array<GiphyEntry>,
  error: ?Error
};

const trendingInitialState: TrendingState = {
    isFetching: false,
    entries: [],
    error: null
};

export function trendingGiphyReducer(state: TrendingState = trendingInitialState, action: Action): TrendingState{
    switch(action.type){
        case 'REQUEST_TRENDING_GIPHY':
        case 'REQUEST_TRENDING_GIPHY_SUCCESS':
        case 'REQUEST_TRENDING_GIPHY_FAILED':
            return giphyReducer(state, action);
        default :
            return state;
    }
}

export type SearchMap = {
  [key:string]: TrendingState
}

export type SearchState = {
  currentSearch: string,
  searches: SearchMap
}

const searchInitialState: SearchState = {
    currentSearch: '',
    searches: { }
};

export function searchGiphyReducer(state: SearchState = searchInitialState, action: Action): SearchState {
    switch(action.type){
        case 'SET_CURRENT_SEARCH':
            return {
                ...state,
                currentSearch: action.query
            };
        case 'REQUEST_SEARCH_GIPHY':
        case 'REQUEST_SEARCH_GIPHY_SUCCESS':
        case 'REQUEST_SEARCH_GIPHY_FAILED':
            let currentState = state[action.query] || trendingInitialState;
            return {
                ...state,
                searches: {
                    [action.query]: giphyReducer(currentState, action)
                }
            };
        default :
            return state;
    }
}

function giphyReducer(state: TrendingState, action: Action): TrendingState {
    switch (action.type) {
        case 'REQUEST_TRENDING_GIPHY':
        case 'REQUEST_SEARCH_GIPHY':
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case 'REQUEST_TRENDING_GIPHY_FAILED':
        case 'REQUEST_SEARCH_GIPHY_FAILED':
            let error = action.error;
            return {
                ...state,
                isFetching: false,
                error
            };
        case 'REQUEST_TRENDING_GIPHY_SUCCESS':
        case 'REQUEST_SEARCH_GIPHY_SUCCESS':
            let entries = action.entries;
            return {
                isFetching: false,
                entries,
                error: null
            };
        default:
            return state;
    }
}
