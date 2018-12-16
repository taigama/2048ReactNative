import PropTypes from "prop-types";

import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text, TouchableOpacity
} from "react-native";

import CardWrapper from './CardWrapper';
import Label from './Label';

export default class CardLabel extends Component {

    static propTypes = {
        idGroupLabel: PropTypes.number,
        clickLabelCallback: PropTypes.func,
    };

    constructor(props) {
        super(props);
        const {idGroupLabel, clickLabelCallback} = this.props;

        this.state = {
            idGroupLabel: idGroupLabel,
        };

        if (idGroupLabel) {
            this.labels = null;// TODO: labels list from idGroupLabel
            this.labels = [
                {key: 1, data: 3},
                {key: 2, data: 3},
                {key: 3, data: null},
                {key: 4, data: 3},
                {key: 5, data: 3},
                {key: 9, data: 3333},
                {key: 19, data: 3},
                {key: 12, data: 3},
                {key: 11, data: null},
                {key: 15, data: 3},
                {key: 16, data: 3},
            ];
            this.viewSub = () => (
                this.labels.map((label) => <Label clickCallback={this.onClickLabel} idLabel={label.data}/>)
            );
        }
        else {
            this.viewSub = () => (
                <TouchableOpacity
                    onPress={this.onClickLabel}
                    style={styles.backgroundText}
                >
                    <Text style={styles.emptyText}>
                        Labels...
                    </Text>
                </TouchableOpacity>

            );
        }
        this.onClickLabel = clickLabelCallback;
    }

    render() {
        return (
            <CardWrapper
                iconName='dns'
                iconColor='#555'
                iconSize={24}
                minHeight={40}
            >
                {this.viewSub()}
            </CardWrapper>
        )
    }


}

const styles = StyleSheet.create({
    backgroundText: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4
    },
    emptyText: {
        color: '#555'
    },
    dialogContent: {
        flex: 1,
        backgroundColor: '#0ff',
    }
});