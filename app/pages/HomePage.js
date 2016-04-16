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
                <SearchBox style={styles.searchBox} onSearch={(search) => this.goToSearchGiphyPage(search)}/>
                <View style={styles.buttonsContainer}>
                    <SquareButton onPress={() => Actions.trending()}
                                  title="Trending" icon="star"/>
                    <SquareButton onPress={() => this.goToSearchGiphyPage('cats')}
                                  title="Cats" icon="social-octocat"/>
                    <SquareButton onPress={() => this.goToSearchGiphyPage('civil war')}
                                  title="Civil War" icon="nuclear"/>
                    <SquareButton onPress={() => this.goToSearchGiphyPage('dogs')}
                                  title="Dogs" icon="ios-paw"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        backgroundColor: Styles.primaryColorDarker,
        flexDirection: 'column'
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBox:{
        height: 45,
        margin: 15
    }
});

export default connect()(HomePage);
