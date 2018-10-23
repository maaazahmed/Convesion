import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';




export default class Formulas extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Formula</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderTopColor: "#312e3f",
    },
});
