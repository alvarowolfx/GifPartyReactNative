/**
  * Created by alvaroviebrantz on 17/04/2016
  * @flow
  */


import React, {View, Component, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native";
import AppStyleSheet from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    style?: number,
    onSearch?: (search:string) => void
}

type State = {
    search: string
}

export default class SearchBox extends Component {
    props:Props;
    state: State;
    constructor(props: Props) {
        super(props);

        this.state = {
            search: ''
        };
    }

    render() {
        return (
            <View style={[styles.searchContainer, this.props.style]}>
                <Ionicons name="search" size={30} style={[AppStyleSheet.defaultButton,styles.searchIcon]}/>
                <TextInput style={styles.searchInput} onChangeText={(search) => this.setState({search})}
                           value={this.state.search}/>
                <TouchableOpacity style={AppStyleSheet.defaultButton} onPress={() => this.props.onSearch && this.props.onSearch(this.state.search)}>
                    <Text style={AppStyleSheet.defaultButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    searchIcon: {
        padding: 8
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#f5f8fa'
    }
});
