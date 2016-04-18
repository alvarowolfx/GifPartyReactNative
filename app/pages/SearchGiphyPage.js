/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {Component, Text, View, Alert} from "react-native";
import {connect} from "react-redux";
import AppStyleSheet from "../styles";
import GiphyList from "../components/GiphyList";
import GiftedSpinner from "react-native-gifted-spinner";
import {searchGiphy} from "../actions/giphy";
import type { Dispatch } from '../actions/types';
import type { AppState } from '../reducers';
import type { GiphyEntry } from '../models';

type Props = {
  searchGiphy: (query: string, quantity: number) => void,
  loading: boolean,
  currentSearch: string,
  entries: Array<GiphyEntry>
}

class SearchGiphyPage extends Component {
    props: Props;

    componentDidMount() {
        this.props.searchGiphy(this.props.currentSearch, 24);
    }

    render() {
        return (
            <View
                style={[AppStyleSheet.pageContainer, this.props.loading ? AppStyleSheet.containerCentered : AppStyleSheet.containerFlexStart]}>
                <Text style={AppStyleSheet.successButtonText}>Searching for {this.props.currentSearch}</Text>
                { this.props.loading ?
                    <GiftedSpinner style={AppStyleSheet.loadingSpinner}/> :
                    <GiphyList entries={this.props.entries}/>}
            </View>
        )
    }

}

function mapActionsToProps(dispatch: Dispatch){
  return {
    searchGiphy: (query, quantity) => dispatch(searchGiphy(query, quantity))
  }
}

function mapStateToProps(state: AppState) {
    let currentSearch = state.search.currentSearch;
    let fetchInfo = state.search.searches[currentSearch];
    if (fetchInfo) {
        return {
            currentSearch,
            loading: fetchInfo.isFetching,
            entries: fetchInfo.entries
        }
    } else {
        return {
            currentSearch,
            loading: false,
            entries: []
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SearchGiphyPage);
