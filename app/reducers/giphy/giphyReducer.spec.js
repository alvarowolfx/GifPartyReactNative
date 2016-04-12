/**
 * Created by alvaroviebrantz on 06/03/16.
 */

import {List, Map, fromJS} from "immutable";
import {expect} from "chai";
import {searchGiphyReducer, trendingGiphyReducer} from "./giphyReducer";

describe('giphyReducers', () => {
    describe('searchGiphyReducer', () => {
        it('has an initial state', () => {
            const action = {type: 'whatever'};
            const nextState = searchGiphyReducer(undefined, action);
            expect(nextState).to.equal(fromJS({}))
        });

        it('should handle REQUEST_SEARCH_GIPHY', () => {
            const action = {type: 'REQUEST_SEARCH_GIPHY', query: 'cats'};
            const nextState = searchGiphyReducer(undefined, action);

            let subEntriesByQuery = nextState.get('cats');
            expect(subEntriesByQuery).to.not.be.undefined;
            expect(subEntriesByQuery.get('isFetching')).to.equal(true);
            expect(subEntriesByQuery.get('error')).to.equal(null);
        });

        it('should handle REQUEST_SEARCH_GIPHY_SUCCESS', () => {
            const action = {
                type: 'REQUEST_SEARCH_GIPHY_SUCCESS',
                entries: List.of({
                    id: 'aaa'
                }),
                query: 'cats'
            };
            const nextState = searchGiphyReducer(undefined, action);

            expect(nextState.getIn(['cats', 'isFetching'])).to.equal(false);
            expect(nextState.getIn(['cats', 'error'])).to.equal(null);
            expect(nextState.getIn(['cats', 'entries']).count()).to.equal(1);
        });

        it('should handle REQUEST_SEARCH_GIPHY_FAILED', () => {
            const error = new Error('Oh no!');
            const action = {
                type: 'REQUEST_SEARCH_GIPHY_FAILED',
                error,
                query: 'cats'
            };
            const nextState = searchGiphyReducer(undefined, action);

            expect(nextState.getIn(['cats', 'isFetching'])).to.equal(false);
            expect(nextState.getIn(['cats', 'error'])).to.equal(error);
        });
    });

    describe('trendingGiphyReducer', () => {
        it('has an initial state', () => {
            const action = {type: 'whatever'};
            const nextState = trendingGiphyReducer(undefined, action);
            expect(nextState).to.equal(fromJS({
                isFetching: false,
                error: null,
                entries: []
            }))
        });

        it('should handle REQUEST_TRENDING_GIPHY', () => {
            const action = {type: 'REQUEST_TRENDING_GIPHY'};
            const nextState = trendingGiphyReducer(undefined, action);

            expect(nextState.get('isFetching')).to.equal(true);
            expect(nextState.get('error')).to.equal(null);
        });

        it('should handle REQUEST_TRENDING_GIPHY_SUCCESS', () => {
            const action = {
                type: 'REQUEST_TRENDING_GIPHY_SUCCESS',
                entries: List.of({
                    id: 'aaa'
                })
            };
            const nextState = trendingGiphyReducer(undefined, action);

            expect(nextState.get('isFetching')).to.equal(false);
            expect(nextState.get('error')).to.equal(null);
            expect(nextState.get('entries').count()).to.equal(1);
        });

        it('should handle REQUEST_TRENDING_GIPHY_FAILED', () => {
            const error = new Error('Oh no!');
            const action = {
                type: 'REQUEST_TRENDING_GIPHY_FAILED',
                error
            };
            const nextState = trendingGiphyReducer(undefined, action);

            expect(nextState.get('isFetching')).to.equal(false);
            expect(nextState.get('error')).to.equal(error);
        });
    });
});
