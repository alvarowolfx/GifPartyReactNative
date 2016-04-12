/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {Component, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import { connect } from 'react-redux';
import { fetchTrendingGiphy } from '../reducers/giphy/giphyActions';
import BaseGiphyPage from "./BaseGiphyPage";

class TrendingGiphyPage extends BaseGiphyPage {
    componentDidMount() {
        this.props.dispatch(fetchTrendingGiphy(24));
    }
}

function mapStateToProps(state) {
    console.log(state.trending.toJS());
    return {
        loading: state.trending.get('isFetching'),
        entries: state.trending.get('entries').toJS()
    }
}

export default connect(mapStateToProps)(TrendingGiphyPage);
