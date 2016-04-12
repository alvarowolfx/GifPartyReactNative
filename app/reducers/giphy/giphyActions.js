/**
 * Created by alvaroviebrantz on 06/03/16.
 */

export const REQUEST_TRENDING_GIPHY = 'REQUEST_TRENDING_GIPHY';
export const REQUEST_TRENDING_GIPHY_SUCCESS = 'REQUEST_TRENDING_GIPHY_SUCCESS';
export const REQUEST_TRENDING_GIPHY_FAILED = 'REQUEST_TRENDING_GIPHY_FAILED';

export const REQUEST_SEARCH_GIPHY = 'REQUEST_SEARCH_GIPHY';
export const REQUEST_SEARCH_GIPHY_SUCCESS = 'REQUEST_SEARCH_GIPHY_SUCCESS';
export const REQUEST_SEARCH_GIPHY_FAILED = 'REQUEST_SEARCH_GIPHY_FAILED';

const GIPHY_API_ENDPOINT = 'http://api.giphy.com/v1/gifs';
const GIPHY_API_KEY = 'dc6zaTOxFJmzC';

function requestTrendingGiphySuccess(entries) {
    return {
        type: REQUEST_TRENDING_GIPHY_SUCCESS,
        entries
    }
}

function requestTrendingGiphyFailed(error) {
    return {
        type: REQUEST_TRENDING_GIPHY_FAILED,
        error
    }
}

function requestTrendingGiphy(quantity:number) {
    return {
        type: REQUEST_TRENDING_GIPHY,
        quantity
    }
}

function requestSearchGiphySuccess(query, entries) {
    return {
        type: REQUEST_SEARCH_GIPHY_SUCCESS,
        entries,
        query
    }
}

function requestSearchGiphyFailed(query, error) {
    return {
        type: REQUEST_SEARCH_GIPHY_FAILED,
        query,
        error
    }
}

function requestSearchGiphy(query:string, quantity:number) {
    return {
        type: REQUEST_SEARCH_GIPHY,
        query,
        quantity
    }
}

export function searchGiphy(query:string, quantity:number) {
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

export function fetchTrendingGiphy(quantity:number) {
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
