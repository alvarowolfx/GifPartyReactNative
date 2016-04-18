/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */
'use strict';

import { combineReducers } from 'redux';
import { searchGiphyReducer, trendingGiphyReducer } from './giphy';
import type { TrendingState, SearchState } from './giphy';

export type AppState = {
  search: SearchState,
  trending: TrendingState
}

const rootReducer = combineReducers({
    search: searchGiphyReducer,
    trending: trendingGiphyReducer
});

export default rootReducer;
