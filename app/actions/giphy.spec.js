/**
 * Created by alvaroviebrantz on 06/03/16. 
 */

import { List, Map, fromJS } from 'immutable';
import url from 'url';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import { spy } from 'sinon';

import { fetchTrendingGiphy, searchGiphy } from './giphy';

describe('giphyActions', () => {
    describe('fetchTrendingGiphy', () => {
        const giphyUrlRegex = /\/trending/;
        afterEach(() => {
            fetchMock.restore();
        });

        it('should call fetch with /trending with api_key and limit', () => {
            fetchMock.mock(giphyUrlRegex, 200);
            let calledAction;
            const fakeDispatcher = (action) => {
                calledAction = action;
            };

            const next = fetchTrendingGiphy(1);
            next(fakeDispatcher);

            expect(fetchMock.called(giphyUrlRegex)).to.equal(true);
            expect(fetchMock.lastOptions(giphyUrlRegex)).to.deep.equal({});

            let calledUrl = fetchMock.lastUrl(giphyUrlRegex);
            let queryString = url.parse(calledUrl, true).query;

            expect(queryString.api_key).to.not.be.null;
            expect(queryString.limit).to.equal("1");
        });

        it('should dispatch REQUEST_TRENDING_GIPHY action', () => {
            fetchMock.mock(giphyUrlRegex, 200);
            let calledAction = null;
            const fakeDispatcher = (action) => {
                calledAction = action;
            };

            const next = fetchTrendingGiphy(1);
            next(fakeDispatcher);

            expect(calledAction).to.deep.equal({
                type: 'REQUEST_TRENDING_GIPHY',
                quantity: 1
            });
        });

        it('should dispatch REQUEST_TRENDING_GIPHY_SUCCESS on success', function(done){
            fetchMock.mock(giphyUrlRegex, 'GET', {
                data: [
                    {id: 'aaa'}
                ]
            });
            let lastCalledAction = null;
            const fakeDispatcher = (action) => {
                lastCalledAction = action;
            };

            const next = fetchTrendingGiphy(1);
            next(fakeDispatcher).then( function(){
                try {
                    expect(lastCalledAction).to.deep.equal({
                        type: 'REQUEST_TRENDING_GIPHY_SUCCESS',
                        entries: [{id: 'aaa'}]
                    });
                    done();
                } catch(err) {
                    done(err);
                }
            });
        });

        it('should dispatch REQUEST_TRENDING_GIPHY_FAILED on success', function(done){
            const error = new Error('Oh no');
            fetchMock.mock(giphyUrlRegex, { throws: error});
            let lastCalledAction = null;
            const fakeDispatcher = (action) => {
                lastCalledAction = action;
            };

            const next = fetchTrendingGiphy(1);
            next(fakeDispatcher).then(function(){
                try {
                    expect(lastCalledAction.type).to.equal('REQUEST_TRENDING_GIPHY_FAILED');
                    expect(lastCalledAction.error).to.equal(error);
                    done();
                }catch(e){
                    done(e);
                }
            });
        });
    });

    describe('searchGiphy', () => {
        const giphySearchUrlRegex = /\/search/;
        afterEach(() => {
            fetchMock.restore();
        });

        it('should call fetch with /search with api_key, limit and query', () => {
            fetchMock.mock(giphySearchUrlRegex, 200);
            let calledAction;
            const fakeDispatcher = (action) => {
                calledAction = action;
            };

            const next = searchGiphy('cats',1);
            next(fakeDispatcher);

            expect(fetchMock.called(giphySearchUrlRegex)).to.equal(true);
            expect(fetchMock.lastOptions(giphySearchUrlRegex)).to.deep.equal({});

            let calledUrl = fetchMock.lastUrl(giphySearchUrlRegex);
            let queryString = url.parse(calledUrl, true).query;

            expect(queryString.api_key).to.not.be.null;
            expect(queryString.limit).to.equal("1");
            expect(queryString.q).to.equal("cats");
        });

        it('should dispatch REQUEST_SEARCH_GIPHY action', () => {
            fetchMock.mock(giphySearchUrlRegex, 200);
            let calledAction = null;
            const fakeDispatcher = (action) => {
                calledAction = action;
            };

            const next = searchGiphy('cats',1);
            next(fakeDispatcher);

            expect(calledAction).to.deep.equal({
                type: 'REQUEST_SEARCH_GIPHY',
                quantity: 1,
                query: 'cats'
            });
        });

        it('should dispatch REQUEST_SEARCH_GIPHY_SUCCESS on success', function(done){
            fetchMock.mock(giphySearchUrlRegex, 'GET', {
                data: [
                    {id: 'aaa'}
                ]
            });
            let lastCalledAction = null;
            const fakeDispatcher = (action) => {
                lastCalledAction = action;
            };

            const next = searchGiphy('cats',1);
            next(fakeDispatcher).then( function(){
                try {
                    expect(lastCalledAction).to.deep.equal({
                        type: 'REQUEST_SEARCH_GIPHY_SUCCESS',
                        entries: [{id: 'aaa'}],
                        query: 'cats'
                    });
                    done();
                } catch(err) {
                    done(err);
                }
            });
        });

        it('should dispatch REQUEST_SEARCH_GIPHY_FAILED on success', function(done){
            const error = new Error('Oh no');
            fetchMock.mock(giphySearchUrlRegex, { throws: error});
            let lastCalledAction = null;
            const fakeDispatcher = (action) => {
                lastCalledAction = action;
            };

            const next = searchGiphy('cats',1);
            next(fakeDispatcher).then(function(){
                try {
                    expect(lastCalledAction.type).to.equal('REQUEST_SEARCH_GIPHY_FAILED');
                    expect(lastCalledAction.error).to.equal(error);
                    done();
                }catch(e){
                    done(e);
                }
            });
        });
    });
});
