/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */
'use strict';

import { combineReducers } from 'redux';
import { searchGiphyReducer, trendingGiphyReducer } from './giphy/giphyReducer';

const rootReducer = combineReducers({
    search: searchGiphyReducer,
    trending: trendingGiphyReducer
});

export default rootReducer;
