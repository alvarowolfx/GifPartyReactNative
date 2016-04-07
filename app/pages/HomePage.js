/**
 * Created by alvaroviebrantz on 06/04/16.
 */

import React, {
    Component,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import AppStyleSheet, {
    Styles,
    getMaterialDesignElevation
} from '../styles';

export default class HomePage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Welcome to Gif Party
                </Text>
                <TouchableOpacity onPress={Actions.rock} style={[AppStyleSheet.defaultButton,getMaterialDesignElevation(2)]}>
                    <Text style={AppStyleSheet.defaultButtonText}>Party Rock !!!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
});
