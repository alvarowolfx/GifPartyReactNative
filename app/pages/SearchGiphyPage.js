/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {Component, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import { connect } from 'react-redux';
import AppStyleSheet from '../styles';
import GiphyList from '../components/GiphyList';
import GiftedSpinner from 'react-native-gifted-spinner';
import { searchGiphy } from '../reducers/giphy/giphyActions';
import BaseGiphyPage from "./BaseGiphyPage";

class SearchGiphyPage extends BaseGiphyPage {
    componentDidMount() {
        this.props.dispatch(searchGiphy(this.props.currentSearch,24));
    }

    render(){
        return (
            <View style={[AppStyleSheet.pageContainer, this.props.loading ? AppStyleSheet.containerCentered : AppStyleSheet.containerFlexStart]}>
                <Text style={AppStyleSheet.successButtonText}>Searching for {this.props.currentSearch}</Text>
                { this.props.loading ?
                    <GiftedSpinner style={AppStyleSheet.loadingSpinner}/> :
                    <GiphyList entries={this.props.entries}/>}
            </View>
        )
    }

}

function mapStateToProps(state) {
    let currentSearch = state.search.get('currentSearch');
    let fetchInfo = state.search.getIn(['searches', currentSearch]);
    if(fetchInfo){
        return {
            currentSearch,
            loading: state.search.getIn(['searches', currentSearch, 'isFetching']),
            entries: state.search.getIn(['searches', currentSearch, 'entries']).toJS()
        }
    }else{
        return {
            currentSearch,
            loading: false,
            entries: []
        }
    }
}

export default connect(mapStateToProps)(SearchGiphyPage);
