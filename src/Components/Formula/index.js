import React, { Component } from 'react';
import {TouchableOpacity} from "react-native"
import { Container, Header, Left, Body, Right, Button, Icon, Title, View } from 'native-base';




export default class Formulas extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#312e3f", alignItems: "center" }} >
                    <View style={{flex:1, justifyContent:"center"}} >
                        <TouchableOpacity activeOpacity={0.6} >
                            <Icon  style={{color:"#fff", fontSize:22}} name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                </Header>
            </Container>
        );
    }
}