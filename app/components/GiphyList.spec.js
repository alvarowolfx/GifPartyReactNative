/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {ListView, PropTypes, Image, TouchableHighlight} from "react-native";
import {shallow, mount, render} from "enzyme";
import {expect, spy} from "chai";
import GiphyList from "./GiphyList";
import GiphyListItem from "./GiphyListItem";

describe('GiphyList', () => {

    it('should use a ListView', () => {
        const props = {
            entries: []
        };
        const component = shallow(<GiphyList {...props}/>);
        expect(component.node.type).to.equal(ListView);
    });

    it('should call onRowSelected on touching a cell', () => {
        let selectedRow = null;
        const props = {
            entries: [{
                id: 'aaa',
                images: {
                    fixed_height_small: {
                        url: 'http://example.com',
                        height: '200',
                        width: '200'
                    }
                }
            }],
            onRowSelected: (row) => { selectedRow = row }
        };
        const component = shallow(<GiphyList {...props}/>);

        let listView = component.find(ListView);
        let renderRow = listView.props().renderRow;
        let row = renderRow(props.entries[0]);
        expect(row.type).to.equal(TouchableHighlight);
        let onPress = row.props.onPress;
        onPress();
        expect(selectedRow).to.deep.equal(props.entries[0]);

        /* Mocked ListView is not rendering the content =/
        expect(component.findWhere(t => t.node.type == GiphyListItem)).to.have.length(1);
         */
    })

});
