/**
 * Created by alvaroviebrantz on 17/04/16.
 * @flow
 */

import type { GiphyEntry } from '../models';

export type Action =
    { type: 'REQUEST_TRENDING_GIPHY', quantity: number }
  | { type: 'REQUEST_TRENDING_GIPHY_SUCCESS', entries: Array<GiphyEntry> }
  | { type: 'REQUEST_TRENDING_GIPHY_FAILED', error: Error }
  | { type: 'REQUEST_SEARCH_GIPHY', query: string, quantity: number}
  | { type: 'REQUEST_SEARCH_GIPHY_SUCCESS', query: string, entries: Array<GiphyEntry> }
  | { type: 'REQUEST_SEARCH_GIPHY_FAILED', query: string, error: Error }
  | { type: 'SET_CURRENT_SEARCH', query: string };


export type Dispatch = (action: Action | ThunkAction ) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState?: GetState) => any;
