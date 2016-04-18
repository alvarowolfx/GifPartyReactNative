/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {Component, View, Alert} from "react-native";
import {connect} from "react-redux";
import {fetchTrendingGiphy} from "../actions/giphy";
import AppStyleSheet from "../styles";
import GiftedSpinner from "react-native-gifted-spinner";
import GiphyList from "../components/GiphyList";
import type { AppState } from '../reducers';

class TrendingGiphyPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTrendingGiphy(24));
    }

    render() {
        return (
            <View
                style={[AppStyleSheet.pageContainer, this.props.loading ? AppStyleSheet.containerCentered : AppStyleSheet.containerFlexStart]}>
                { this.props.loading ?
                    <GiftedSpinner style={AppStyleSheet.loadingSpinner}/> :
                    <GiphyList entries={this.props.entries}/>}
            </View>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {
        loading: state.trending.isFetching,
        entries: state.trending.entries
    }
}

export default connect(mapStateToProps)(TrendingGiphyPage);
