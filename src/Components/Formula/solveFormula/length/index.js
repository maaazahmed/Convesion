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

                <View style={styles.solveContainer} >
                    <View style={styles.inputCiintainer} >
                        <View>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#312e3f"
                                placeholder="Type Numbe"
                                style={styles.TextInput} />
                        </View>
                        <View style={styles.ImageContainer} >
                            <Image style={styles.Image}
                                source={require("../assats/equal.png")} />
                        </View>
                        <View>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Type Numbe"
                                placeholderTextColor="#312e3f"
                                style={styles.TextInput} />
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
    solveContainer: {
        justifyContent: "center",
        alignItems: "center", flex: 1
    },
    inputCiintainer: {
        width,
        paddingLeft: 20,
        paddingRight: 20
    },
    TextInput: {
        padding: 15,
        borderColor: "#312e3f",
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 17,
        color: "#312e3f"
    },
    ImageContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 80,
    },
    Image: {
        height: 50,
        width: 50
    }
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
