/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {Component, View, StyleSheet, Animated} from "react-native";
import {connect} from "react-redux";
import {Styles} from "../styles";
import {Actions} from "react-native-router-flux";
import {setCurrentSearch} from "../actions/giphy";
import SearchBox from "../components/SearchBox";
import SquareButton, {AnimatedSquareButton} from "../components/SquareButton";

type State = {
  anim: Animated.Value
}

class HomePage extends Component {
    state: State;

    constructor(props) {
        super(props);

        this.state = {
            anim: new Animated.Value(0)
        }
    }

    componentDidMount(){
        Animated.spring(this.state.anim, {
            toValue: 100,
            duration: 3000
        }).start();
    }

    goToSearchGiphyPage(query:string) {
        console.log("Searching for : " + query);
        this.props.dispatch(setCurrentSearch(query));
        Actions.search();
    }

    render() {
        let animateFromLeft = this.state.anim.interpolate({
            inputRange: [0, 100],
            outputRange: [-100, 0]
        });
        let animateFromRight = this.state.anim.interpolate({
            inputRange: [0, 100],
            outputRange: [100, 0]
        });

        let fromLeft = {
            transform: [{translateX: animateFromLeft}]
        };

        let fromRight = {
            transform: [{translateX: animateFromRight}]
        };
        return (
            <View style={styles.container}>
                <SearchBox style={styles.searchBox} onSearch={(search) => this.goToSearchGiphyPage(search)}/>
                <View style={styles.buttonsContainer}>
                    <AnimatedSquareButton onPress={() => Actions.trending()}
                                          title="Trending" icon="star"
                                          style={fromLeft}/>
                    <AnimatedSquareButton onPress={() => this.goToSearchGiphyPage('cats')}
                                          title="Cats" icon="social-octocat"
                                          style={fromRight}/>
                    <AnimatedSquareButton onPress={() => this.goToSearchGiphyPage('civil war')}
                                          title="Civil War" icon="nuclear"
                                          style={fromLeft}/>
                    <AnimatedSquareButton onPress={() => this.goToSearchGiphyPage('dogs')}
                                  title="Dogs" icon="ios-paw"
                                          style={fromRight}/>
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
        flex: 5,
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
