/**
 * Created by alvaroviebrantz on 06/04/16.
 */
/**
 * Created by alvaroviebrantz on 04/03/16.
 */

import React, { View, Text, TouchableHighlight, PropTypes } from 'react-native';
import { shallow, mount, render } from 'enzyme';
import { expect, spy } from 'chai';
import { Provider } from 'react-redux';

import GifPartyApp from './index';

describe('GifPartyApp', () => {
    it('should be wrapped on redux provider', () => {
        const app = shallow(<GifPartyApp />);
        expect(app.node.type).to.equal(Provider);
    });
});

