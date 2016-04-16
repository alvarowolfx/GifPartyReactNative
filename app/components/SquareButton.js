import React, {Component, Text, View, TouchableOpacity, StyleSheet} from "react-native";
import AppStyleSheet, {getMaterialDesignElevation} from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
    title: string,
    icon:  string,
    onPress?: () => void
}

export default class SquareButton extends Component {
    props:Props;

    static get defaultProps(): Props{
        return {
            onPress: () => {}
        }
    }

    render() {
        return (
            <TouchableOpacity style={[AppStyleSheet.defaultButton, styles.squareButton, getMaterialDesignElevation(2)]}
                              onPress={this.props.onPress}>
                <View style={styles.squareButtonIcon}>
                    <Ionicons name={this.props.icon} size={60}/>
                </View>
                <Text style={AppStyleSheet.defaultButtonText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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