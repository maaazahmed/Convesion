import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

export default class ResponsiveTest extends React.Component {
    componentDidMount() {
        loc(this);
    }

    componentWillUnMount() {
        rol();
    }
    render() {



        return (
            <View style={styles.container}>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
                <View style={styles.responsiveBox}>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        flexWrap:"wrap",
    },
    responsiveBox: {
        width: wp('16%'),
        height: hp('10%'),
        borderWidth: 2,
        borderColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin:5
    },
    text: {
        color: 'white'
    }
});