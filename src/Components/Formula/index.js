import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions, StyleSheet } from "react-native"
import { Container, Content, Header, Icon } from 'native-base';



const { width, height } = Dimensions.get("window")
export default class Formulas extends Component {

    render() {
        let arr = []
        for (var i = 0; i < 30; i++) {
            arr.push(
                <TouchableOpacity activeOpacity={0.5} key={i} style={styles.listContainer} >
                    <View
                        style={styles.listBtn} >
                        <Text style={styles.listText} >{i + 1} )  Formulas</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <Container style={{ backgroundColor: "#f2f2f2" }} >
                <Header style={styles.Header} >
                    <View style={styles.heightIconCintainer} >
                        <TouchableOpacity activeOpacity={0.6} >
                            <Icon style={styles.heightIcon} name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content>
                    {arr}
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    Header: {
        backgroundColor: "#312e3f",
        alignItems: "center"
    },
    heightIconCintainer: {
        flex: 1,
        justifyContent: "center"
    },
    heightIcon: {
        color: "#fff",
        fontSize: 22
    },
    listContainer: {
        height: height / 13,
        width,
        borderBottomColor: "#312e3f",
        borderBottomWidth: 1
    },
    listBtn: {
        flex: 1,
        justifyContent: "center",
        padding: 15,
    },
    listText: {
        fontSize: 18,
        color: "#312e3f"
    }

})