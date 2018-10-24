import React, { Component } from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, TextInput, Image } from "react-native"
import { Container, Header, Icon } from 'native-base';
import { connect } from "react-redux"



const { width, height } = Dimensions.get("window")
class Lenths extends Component {
    solveEquation(data) {
        this.props.navigation.navigate(this.props.routKey.routeKey)
    }


    render() {
        return (
            <Container style={{ backgroundColor: "#f2f2f2" }} >
                <Header style={styles.Header} >
                    <View style={styles.heightIconCintainer} >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Categorry")}
                            activeOpacity={0.6} >
                            <Icon style={styles.heightIcon} name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                </Header>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }} >

                    <View style={{ width, paddingLeft: 20, paddingRight: 20  }} >
                        <View style={{ borderRadius:5}}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#312e3f"
                                placeholder="Type Numbe"
                                style={{
                                    padding:15,
                                    borderColor: "#312e3f",
                                    borderWidth: 2,
                                    borderRadius:5,
                                    fontSize:17,
                                    color:"#312e3f"
                                }} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", height: 80, }} >
                            <Image style={{height:50, width:50}} source={require("../assats/equal.png")} />
                        </View>
                        <View style={{ borderRadius:5}}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Type Numbe"
                                placeholderTextColor="#312e3f"

                                style={{
                                    padding:15,
                                    fontSize:17,
                                    borderColor: "#312e3f",
                                    borderWidth: 2,
                                    borderRadius:5,
                                    color:"#312e3f"

                                }} />
                        </View>

                    </View>
                </View>
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
})



const mapStateToProp = (state) => {
    return ({
        formulaList: state.root,
        routKey: state.root,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(Lenths)
