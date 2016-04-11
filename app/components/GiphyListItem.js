/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {Component, View, StyleSheet, Image, PropTypes, Text, Dimensions} from "react-native";
import GiftedSpinner from "react-native-gifted-spinner";

export default class GiphyListItem extends Component {

    static propTypes = {
        id: PropTypes.string,
        url: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loading: false
        }
    }

    onLoadEnd() {
        this.setState({
            loaded: true,
            loading: false
        })
    }

    onLoadStart() {
        if (!this.state.loaded) {
            this.setState({
                loading: true
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
                    width: screen.width/2
            };
        };
        let getDisplayStyle = () => {
            if(this.state.loading){
                return {
                    position: 'absolute'
                }
            }
            return null;
        };
        return (
            <View style={[styles.container]}>
                { this.state.loading ? <GiftedSpinner style={getWidthForImage()}/> : null }
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
    spinner: {
    }
});
