import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions } from "react-native"
import { Container, Content, Header, Icon } from 'native-base';



const { width, height } = Dimensions.get("window")
export default class Formulas extends Component {

    render() {
        let arr = []
        for (var i = 0; i < 30; i++) {
            arr.push(
                <View style={{
                    height: height / 13,
                    width,
                    borderBottomColor: "#312e3f",
                    borderBottomWidth: 1,
                }} >

                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: "center", padding: 15, }} >
                        <Text style={{ fontSize: 18, color: "#312e3f" }} >{i + 1} )  Formulas</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <Container>
                <Header style={{ backgroundColor: "#312e3f", alignItems: "center" }} >
                    <View style={{ flex: 1, justifyContent: "center" }} >
                        <TouchableOpacity activeOpacity={0.6} >
                            <Icon style={{ color: "#fff", fontSize: 22 }} name='arrow-back' />
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