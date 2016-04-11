/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {Component, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import AppStyleSheet, {Styles} from "../styles";
import GiftedSpinner from "react-native-gifted-spinner";
import GiphyList from "../components/GiphyList";

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entries: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        let baseURL = 'http://api.giphy.com/v1/gifs';
        let resource = '/trending';
        //let resource = '/search';
        let queryParams = 'api_key=dc6zaTOxFJmzC&limit=24';
        //let extraQuery = 'q=funny+cat';
        let extraQuery = '';
        let url = baseURL + resource + '?' + queryParams + extraQuery;
        fetch(url)
            .then(response => response.json())
            .then(response => response.data)
            .then(entries => this.setState({entries, loading: false}))
            .catch( e => {
                Alert.alert(
                    'Opps...',
                    'Não conseguimos carregar as imagens',
                    [
                        {text: 'Tentar novamente ?', onPress: this.componentDidMount},
                        {text: 'Não'}
                    ]
                )
            })
    }

    render() {
        return (
            <View style={[styles.container, this.state.loading ? styles.containerCentered : styles.containerFlexStart]}>
                { this.state.loading ?
                    <GiftedSpinner style={AppStyleSheet.loadingSpinner}/> :
                    <GiphyList entries={this.state.entries}/>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        backgroundColor: Styles.primaryColor
    },
    containerCentered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerFlexStart: {
        justifyContent: 'flex-end'
    }
});
