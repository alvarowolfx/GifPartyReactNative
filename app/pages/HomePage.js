/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {Component, Text, View, StyleSheet, TouchableOpacity, Alert, ScrollView} from "react-native";
import { connect } from 'react-redux';
import AppStyleSheet, {Styles, getMaterialDesignElevation} from "../styles";
import {Actions} from 'react-native-router-flux';
import { setCurrentSearch } from '../reducers/giphy/giphyActions'
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    goToSearchGiphyPage(query:string){
        this.props.dispatch(setCurrentSearch(query));
        Actions.search();
    }

    render() {

        let SquareButton = (props) => {
            return (
                <TouchableOpacity style={[AppStyleSheet.defaultButton, styles.squareButton, getMaterialDesignElevation(2)]}
                                  onPress={props.onPress}>
                    <View style={styles.squareButtonIcon}>
                        <Ionicons name={props.icon} size={60}/>
                    </View>
                    <Text style={AppStyleSheet.defaultButtonText}>{props.title}</Text>
                </TouchableOpacity>
            )
        };

        return (
            <View style={styles.container}>
                <SquareButton onPress={() => Actions.trending()}
                              title="Trending" icon="star"/>
                <SquareButton onPress={() => this.goToSearchGiphyPage('cats')}
                              title="Cats" icon="social-octocat"/>
                <SquareButton onPress={() => this.goToSearchGiphyPage('civil war')}
                              title="Civil War" icon="nuclear"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        backgroundColor: Styles.primaryColorDarker,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    squareButtonIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    squareButton: {
        width: 120,
        height: 120,
        margin: 15,
        flexDirection: 'column'
    }
});

export default connect()(HomePage);
