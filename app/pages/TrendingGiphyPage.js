/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {Component, View, Alert} from "react-native";
import {connect} from "react-redux";
import {fetchTrendingGiphy} from "../reducers/giphy/giphyActions";
import AppStyleSheet from "../styles";
import GiftedSpinner from "react-native-gifted-spinner";
import GiphyList from "../components/GiphyList";

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

function mapStateToProps(state) {
    return {
        loading: state.trending.get('isFetching'),
        entries: state.trending.get('entries').toJS()
    }
}

export default connect(mapStateToProps)(TrendingGiphyPage);
