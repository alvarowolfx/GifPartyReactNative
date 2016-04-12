/**
 * Created by alvaroviebrantz on 06/03/16.
 * @flow
 */

import {fromJS} from "immutable";
import {
    REQUEST_SEARCH_GIPHY,
    REQUEST_SEARCH_GIPHY_SUCCESS,
    REQUEST_SEARCH_GIPHY_FAILED,
    REQUEST_TRENDING_GIPHY,
    REQUEST_TRENDING_GIPHY_FAILED,
    REQUEST_TRENDING_GIPHY_SUCCESS
} from "./giphyActions";

let trendingInitialState = fromJS({
    isFetching: false,
    entries: [],
    error: null
});

let searchInitialState = fromJS({});

export function trendingGiphyReducer(state = trendingInitialState, action){
    switch(action.type){
        case REQUEST_TRENDING_GIPHY:
        case REQUEST_TRENDING_GIPHY_SUCCESS:
        case REQUEST_TRENDING_GIPHY_FAILED:
            return giphyReducer(state, action);
        default :
            return state;
    }
}

export function searchGiphyReducer(state = searchInitialState, action){
    switch(action.type){
        case REQUEST_SEARCH_GIPHY:
        case REQUEST_SEARCH_GIPHY_SUCCESS:
        case REQUEST_SEARCH_GIPHY_FAILED:
            let currentState = state.get(action.query) || trendingInitialState;
            return state.merge({
                [action.query]: giphyReducer(currentState, action)
            });
        default :
            return state;
    }
}

function giphyReducer(state, action) {
    switch (action.type) {
        case REQUEST_TRENDING_GIPHY:
        case REQUEST_SEARCH_GIPHY:
            return state.merge({
                isFetching: true,
                error: null
            });
        case REQUEST_TRENDING_GIPHY_FAILED:
        case REQUEST_SEARCH_GIPHY_FAILED:
            let error = action.error;
            return state.merge({
                isFetching: false,
                error
            });
        case REQUEST_TRENDING_GIPHY_SUCCESS:
        case REQUEST_SEARCH_GIPHY_SUCCESS:
            let entries = action.entries;
            return state.merge({
                isFetching: false,
                entries,
                error: null
            });
        default:
            return state;
    }
}
