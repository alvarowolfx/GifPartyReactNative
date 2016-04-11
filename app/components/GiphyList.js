/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

import React, {Component, View, StyleSheet, Image, PropTypes, ListView, Text, TouchableHighlight} from "react-native";
import GiphyListItem from './GiphyListItem';

export default class GiphyList extends Component {

    static propTypes = {
        entries: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            images: PropTypes.object
        })),
        onRowSelected: PropTypes.func
    };

    static get defaultProps(){
        return {
            onRowSelected: row => {}
        }
    }

    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.entries)
        }
    }

    onPress(rowData: any){
        this.props.onRowSelected(rowData);
    }

    renderCell(rowData: any, sectionID: number, rowID: number){
        return (
            <TouchableHighlight onPress={() => this.onPress(rowData)}>
                <View>
                    <GiphyListItem {...rowData.images['fixed_height']}/>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                contentContainerStyle={styles.content}
                dataSource={this.state.dataSource}
                initialListSize={20}
                pageSize={2}
                scrollRenderAheadDistance={500}
                enableEmptySections
                renderRow={this.renderCell.bind(this)}
            />
        )
    }
};

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
