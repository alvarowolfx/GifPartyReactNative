/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {Component, View, StyleSheet, Alert} from "react-native";
import {connect} from "react-redux";
import {Styles} from "../styles";
import {Actions} from "react-native-router-flux";
import {setCurrentSearch} from "../reducers/giphy/giphyActions";
import SearchBox from "../components/SearchBox";
import SquareButton from "../components/SquareButton";

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    goToSearchGiphyPage(query:string) {
        this.props.dispatch(setCurrentSearch(query));
        Actions.search();
    }

    render() {
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
    }
});

export default connect()(HomePage);
