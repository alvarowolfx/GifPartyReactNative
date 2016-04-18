/**
 * Created by alvaroviebrantz on 06/03/16.
 */

import {expect} from "chai";
import {searchGiphyReducer, trendingGiphyReducer} from "./giphy";

describe('giphyReducers', () => {
    describe('searchGiphyReducer', () => {
        it('has an initial state', () => {
            const action = {type: 'whatever'};
            const nextState = searchGiphyReducer(undefined, action);
            expect(nextState).to.deep.equal({
                currentSearch: '',
                searches: {}
            })
        });

        it('should handle SET_CURRENT_SEARCH', () => {
            const action = {type: 'SET_CURRENT_SEARCH', query: 'cats'};
            const nextState = searchGiphyReducer(undefined, action);

            expect(nextState['currentSearch']).to.equal('cats');
        });

        it('should handle REQUEST_SEARCH_GIPHY', () => {
            const action = {type: 'REQUEST_SEARCH_GIPHY', query: 'cats'};
            const nextState = searchGiphyReducer(undefined, action);

            let subEntriesByQuery = nextState['searches']['cats'];
            expect(subEntriesByQuery).to.not.be.undefined;
            expect(subEntriesByQuery['isFetching']).to.equal(true);
            expect(subEntriesByQuery['error']).to.equal(null);
        });

        it('should handle REQUEST_SEARCH_GIPHY_SUCCESS', () => {
            const action = {
                type: 'REQUEST_SEARCH_GIPHY_SUCCESS',
                entries: [{
                    id: 'aaa'
                }],
                query: 'cats'
            };
            const nextState = searchGiphyReducer(undefined, action);

            expect(nextState['searches']['cats']['isFetching']).to.equal(false);
            expect(nextState['searches']['cats']['error']).to.equal(null);
            expect(nextState['searches']['cats']['entries']).to.have.length(1);
        });

        it('should handle REQUEST_SEARCH_GIPHY_FAILED', () => {
            const error = new Error('Oh no!');
            const action = {
                type: 'REQUEST_SEARCH_GIPHY_FAILED',
                error,
                query: 'cats'
            };
            const nextState = searchGiphyReducer(undefined, action);

            expect(nextState['searches']['cats']['isFetching']).to.equal(false);
            expect(nextState['searches']['cats']['error']).to.equal(error);
        });
    });

    describe('trendingGiphyReducer', () => {
        it('has an initial state', () => {
            const action = {type: 'whatever'};
            const nextState = trendingGiphyReducer(undefined, action);
            expect(nextState).to.deep.equal({
                isFetching: false,
                error: null,
                entries: []
            });
        });

        it('should handle REQUEST_TRENDING_GIPHY', () => {
            const action = {type: 'REQUEST_TRENDING_GIPHY'};
            const nextState = trendingGiphyReducer(undefined, action);

            expect(nextState['isFetching']).to.equal(true);
            expect(nextState['error']).to.equal(null);
        });

        it('should handle REQUEST_TRENDING_GIPHY_SUCCESS', () => {
            const action = {
                type: 'REQUEST_TRENDING_GIPHY_SUCCESS',
                entries: [{
                    id: 'aaa'
                }]
            };
            const nextState = trendingGiphyReducer(undefined, action);

            expect(nextState['isFetching']).to.equal(false);
            expect(nextState['error']).to.equal(null);
            expect(nextState['entries']).to.have.length(1);
        });

        it('should handle REQUEST_TRENDING_GIPHY_FAILED', () => {
            const error = new Error('Oh no!');
            const action = {
                type: 'REQUEST_TRENDING_GIPHY_FAILED',
                error
            };
            const nextState = trendingGiphyReducer(undefined, action);

            expect(nextState['isFetching']).to.equal(false);
            expect(nextState['error']).to.equal(error);
        });
    });
});
