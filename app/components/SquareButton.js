/**
  * Created by alvaroviebrantz on 17/04/2016
  * @flow
  */

import React, {Component, Text, View, TouchableOpacity, StyleSheet, Animated, Dimensions} from "react-native";
import AppStyleSheet, {Styles, getMaterialDesignElevation} from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
    title: string,
    icon:  string,
    onPress?: () => void
}

export default class SquareButton extends Component {
    props:Props;

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

export class AnimatedSquareButton extends SquareButton{
    render(){
        return (
            <Animated.View style={this.props.style}>
                {super.render()}
            </Animated.View>
        );
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
