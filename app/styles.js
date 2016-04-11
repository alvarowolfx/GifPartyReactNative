/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */
'use strict';

import {StyleSheet, Dimensions} from 'react-native';

function getMaterialDesignElevation(level: number): object{
    let screen = Dimensions.get('window');
    let dp = screen.scale;
    const heights = [1, 3, 6, 10, 15];
    const spreads = [1, 3, 3, 5, 6];
    const opacitys = [0.24, 0.23, 0.23, 0.22, 0.22];
    return StyleSheet.create({
        shadow: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: heights[level-1]*dp
            },
            shadowOpacity: opacitys[level-1],
            shadowRadius: spreads[level-1]*dp,
            elevation: dp
        }
    })['shadow'];
}

const Styles = {
    primaryColor: '#3498DB',
    primaryColorDarker: '#2980B9',
    successColor: 'green'
};

export {
    Styles,
    getMaterialDesignElevation
}

const AppStyleSheet = StyleSheet.create({
    primaryButton: {
        backgroundColor: Styles.primaryColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    primaryButtonText: {
        margin: 15,
        color: 'white'
    },
    defaultButton: {
        backgroundColor: '#f5f8fa',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    defaultButtonText: {
        margin: 15
    },
    successButton: {
        backgroundColor: Styles.successColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    successButtonText: {
        margin: 15,
        color: 'white'
    },
    successButtonIcon: {
        marginLeft: 15,
        color: 'white'
    },
    loadingSpinner: {
        backgroundColor:'black',
        padding:20,
        borderRadius: 10
    }
});

export default AppStyleSheet;

