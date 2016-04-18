/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {View, PropTypes, Image} from "react-native";
import {shallow} from "enzyme";
import {expect, spy} from "chai";
import GiphyListItem from "./GiphyListItem";
import GiftedSpinner from 'react-native-gifted-spinner';

describe('GiphyListItem', () => {

    it('should be wrapped on a View and show in a Image the url passed', () => {
        const props = {
            id: 'aaa',
            url: 'http://example.com'
        };
        const component = shallow(<GiphyListItem {...props}/>);
        expect(component.node.type).to.equal(View);

        let images = component.findWhere(t => t.node.type == Image);
        expect(images).to.have.length(1);
        expect(images).to.have.prop('source').deep.equal({
            uri: props.url
        });
    });

    it('should show a GiftedSpinner if the image is loading', () => {
        const props = {
            id: 'aaa',
            url: 'http://example.com'
        };
        const component = shallow(<GiphyListItem {...props}/>);
        expect(component).to.have.state('imageLoaded').to.be.false;
        expect(component).to.have.state('loadingImage').to.be.false;

        let image = component.findWhere(t => t.node.type == Image);

        image.simulate('loadStart');
        expect(component).to.have.state('loadingImage').to.be.true;
        expect(component.findWhere(t => t.node.type == GiftedSpinner)).have.length(1);

        image.simulate('load');
        expect(component).to.have.state('loadingImage').to.be.false;
        expect(component).to.have.state('imageLoaded').to.be.true;
        expect(component.findWhere(t => t.node.type == GiftedSpinner)).have.length(0);
    })

});
