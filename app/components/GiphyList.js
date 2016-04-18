/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */

'use strict';

import type { GiphyEntry } from "../models";
import React, {Component, View, StyleSheet, ListView, TouchableHighlight} from "react-native";
import GiphyListItem from "./GiphyListItem";

type Props = {
    entries: Array<GiphyEntry>,
    onRowSelected?: (entry:GiphyEntry) => void
}

type State = {
    dataSource: ListView.DataSource
}

export default class GiphyList extends Component {
    props:Props;
    state:State;

    constructor(props:Props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.entries)
        };
    }

    onPress(rowData:GiphyEntry) {
        this.props.onRowSelected && this.props.onRowSelected(rowData);
    }

    renderCell(rowData:GiphyEntry, sectionID:number, rowID:number) {
        return (
            <TouchableHighlight onPress={() => this.onPress(rowData)}>
                <View>
                    <GiphyListItem {...rowData.images['fixed_height_small']}/>
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
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
