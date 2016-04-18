/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {Component, View, StyleSheet, Image, Dimensions} from "react-native";
import GiftedSpinner from "react-native-gifted-spinner";

type Props = {
    url: string
}

type State = {
    imageLoaded: boolean,
    loadingImage: boolean
}

export default class GiphyListItem extends Component {
    props:Props;
    state:State;

    constructor(props:Props) {
        super(props);

        this.state = {
            imageLoaded: false,
            loadingImage: false
        };
    }

    onLoadEnd() {
        this.setState({
            imageLoaded: true,
            loadingImage: false
        })
    }

    onLoadStart() {
        if (!this.state.imageLoaded) {
            this.setState({
                loadingImage: true
            })
        }
    }

    render() {
        let source = {
            uri: this.props.url
        };
        let getWidthForImage = () => {
            let screen = Dimensions.get('window');
            return {
                width: screen.width / 2
            };
        };
        let getDisplayStyle = () => {
            if (this.state.loadingImage) {
                return {
                    position: 'absolute'
                }
            }
            return null;
        };
        return (
            <View style={[styles.container]}>
                { this.state.loadingImage ? <GiftedSpinner style={getWidthForImage()}/> : null }
                <Image source={source} style={[
                        styles.image, getWidthForImage(), getDisplayStyle() ]}
                       onLoadStart={this.onLoadStart.bind(this)}
                       onLoad={this.onLoadEnd.bind(this)}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 150,
        backgroundColor: 'rgba(52,52,52,0.3)',
        alignItems: 'center'
    },
    image: {
        height: 150,
        overflow: 'hidden'
    },
    spinner: {}
});
