/**
 * Created by alvaroviebrantz on 06/03/16.
 * @flow
 */

import type {Action, ThunkAction} from './types';
import type { GiphyEntry } from '../models';

const GIPHY_API_ENDPOINT = 'http://api.giphy.com/v1/gifs';
const GIPHY_API_KEY = 'dc6zaTOxFJmzC';

function requestTrendingGiphySuccess(entries: Array<GiphyEntry>): Action {
    return {
        type: 'REQUEST_TRENDING_GIPHY_SUCCESS',
        entries
    }
}

function requestTrendingGiphyFailed(error: Error): Action {
    return {
        type: 'REQUEST_TRENDING_GIPHY_FAILED',
        error
    }
}

function requestTrendingGiphy(quantity:number): Action {
    return {
        type: 'REQUEST_TRENDING_GIPHY',
        quantity
    }
}

function requestSearchGiphySuccess(query:string, entries: Array<GiphyEntry>): Action{
    return {
        type: 'REQUEST_SEARCH_GIPHY_SUCCESS',
        entries,
        query
    }
}

function requestSearchGiphyFailed(query: string, error: Error): Action {
    return {
        type: 'REQUEST_SEARCH_GIPHY_FAILED',
        query,
        error
    }
}

function requestSearchGiphy(query:string, quantity:number): Action {
    return {
        type: 'REQUEST_SEARCH_GIPHY',
        query,
        quantity
    }
}

export function searchGiphy(query:string, quantity:number): ThunkAction {
    return dispatch => {
        dispatch(requestSearchGiphy(query, quantity));
        let resource = '/search';
        let queryParams = 'api_key=' + GIPHY_API_KEY;
        queryParams += '&limit=' + quantity;
        queryParams += '&q=' + query;
        let url = GIPHY_API_ENDPOINT + resource + '?' + queryParams;
        return fetch(url, {})
            .then(response => response.json())
            .then(response => response.data)
            .then(entries => dispatch(requestSearchGiphySuccess(query, entries)))
            .catch(err => dispatch(requestSearchGiphyFailed(query, err)));
    };
}

export function fetchTrendingGiphy(quantity:number): ThunkAction {
    return dispatch => {
        dispatch(requestTrendingGiphy(quantity));
        let resource = '/trending';
        let queryParams = 'api_key=' + GIPHY_API_KEY;
        queryParams += '&limit=' + quantity;
        let url = GIPHY_API_ENDPOINT + resource + '?' + queryParams;
        return fetch(url, {})
            .then(response => response.json())
            .then(response => response.data)
            .then(entries => dispatch(requestTrendingGiphySuccess(entries)))
            .catch(err => dispatch(requestTrendingGiphyFailed(err)));
    };
}

export function setCurrentSearch(query:string): Action{
    return {
        type: 'SET_CURRENT_SEARCH',
        query
    }
}
