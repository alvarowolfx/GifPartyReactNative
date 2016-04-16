import React, {View, Component, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native";
import AppStyleSheet from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    style?: StyleSheet,
    onSearch?: (search:string) => void
}

export default class SearchBox extends Component {
    props:Props;

    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };
    }

    static get defaultProps(){
        return {
            onSearch: (search) => {}
        }
    }

    render() {
        return (
            <View style={[styles.searchContainer, this.props.style]}>
                <Ionicons name="search" size={30} style={[AppStyleSheet.defaultButton,styles.searchIcon]}/>
                <TextInput style={styles.searchInput} onChangeText={(search) => this.setState({search})}
                           value={this.state.search}/>
                <TouchableOpacity style={AppStyleSheet.defaultButton} onPress={() => this.props.onSearch(this.state.search)}>
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