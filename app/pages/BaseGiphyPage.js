/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {Component, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import AppStyleSheet from "../styles";
import GiftedSpinner from "react-native-gifted-spinner";
import GiphyList from "../components/GiphyList";

export default class BaseGiphyPage extends Component {
    render() {
        return (
            <View style={[AppStyleSheet.pageContainer, this.props.loading ? AppStyleSheet.containerCentered : AppStyleSheet.containerFlexStart]}>
                { this.props.loading ?
                    <GiftedSpinner style={AppStyleSheet.loadingSpinner}/> :
                    <GiphyList entries={this.props.entries}/>}
            </View>
        )
    }
}

