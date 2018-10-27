import React, { Component } from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, TextInput, Image } from "react-native"
import { Container, Header, Icon } from 'native-base';
import { connect } from "react-redux"



const { width } = Dimensions.get("window")
class Lenths extends Component {

    constructor() {
        super()
        this.state = {
            valOne: "",
            valTwo: "",
            placeholder1: "",
            placeholder1: "",
        }
    }

    componentDidMount() {
        let conversionTypeName = this.props.conversionType.conversoinType;
        console.log(conversionTypeName)
        let type = conversionTypeName.split(" ")
        this.setState({
            placeholder1: type[0],
            placeholder2: type[2],
        })



    }


    valOneHeandler(ev) {
        let numbeer = ev;
        const conversoinType = this.props.conversionType.conversoinType;
        if (conversoinType === "Centimeter to Milimeter") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 10).toString()
            })
        }
        else if (conversoinType === "Meter to Yard") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1.09361).toString()
            })
        }
        else if (conversoinType === "Meter to Foot") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 3.28084).toString()
            })
        }
        else if (conversoinType === "Meter to Inch") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 0.0254).toString()
            })
        }
        else if (conversoinType === "Meter to Kilometer") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1000).toString()
            })
        }
        else if (conversoinType === "Meter to Centimeter") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 100).toString()
            })
        }
        else if (conversoinType === "Meter to Milimeter") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1000).toString()
            })
        }
        else if (conversoinType === "Meter to Micrometer") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1000000).toString()
            })
        }
        else if (conversoinType === "Meter to Nanometer") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1000000000).toString()
            })
        }
        else if (conversoinType === "Inch to Foot") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 12).toString()
            })
        }
        else if (conversoinType === "Kilometer to Miles") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 0.62137).toString()
            })
        }
        else if (conversoinType === "Nauticalmile to Miles") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 0.868976).toString()
            })
        }
        else if (conversoinType === "Cubicfoot to Cubicinch") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1728).toString()
            })
        }
    }


    valTwoHeandler(ev) {
        let numbeer = ev;
        const conversoinType = this.props.conversionType.conversoinType;
        if (conversoinType === "Centimeter to Milimeter") {
            this.setState({
                valOne: (numbeer / 10).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Yard") {
            this.setState({
                valOne: (numbeer / 1.09361).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Foot") {
            this.setState({
                valOne: (numbeer / 3.28084).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Inch") {
            this.setState({
                valOne: (numbeer * 0.0254).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Kilometer") {
            this.setState({
                valOne: (numbeer * 1000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Centimeter") {
            this.setState({
                valOne: (numbeer / 100).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Milimeter") {
            this.setState({
                valOne: (numbeer / 1000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Micrometer") {
            this.setState({
                valOne: (numbeer / 1000000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Meter to Nanometer") {
            this.setState({
                valOne: (numbeer / 1000000000).toString(),
                valTwo: ev
            })
        }
        // Inch to Foot
        else if (conversoinType === "Inch to Foot") {
            this.setState({
                valOne: (numbeer * 12).toString(),
                valTwo: ev
            })
        }
        // Kilometer to Miles
        else if (conversoinType === "Kilometer to Miles") {
            this.setState({
                valOne: (numbeer / 0.62137).toString(),
                valTwo: ev
            })
        }
        // Nauticalmile to Miles
        else if (conversoinType === "Nauticalmile to Miles") {
            this.setState({
                valOne: (numbeer * 0.868976).toString(),
                valTwo: ev
            })
        }
        // Cubicfoot to  Cubicinch
        else if (conversoinType === "Cubicfoot to Cubicinch") {
            this.setState({
                valOne: (numbeer / 1728).toString(),
                valTwo: ev
            })
        }
    }








    render() {
        return (
            <Container style={{ backgroundColor: "#373447" }} >
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
                                value={this.state.valOne}
                                onChangeText={(event) => this.valOneHeandler(event)}
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#fff"
                                placeholder={this.state.placeholder1}
                                style={styles.TextInput} />
                        </View>
                        <View style={{ marginTop: 30 }} >
                            <TextInput
                                onChangeText={(event) => this.valTwoHeandler(event)}
                                value={this.state.valTwo}
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                placeholder={this.state.placeholder2}
                                placeholderTextColor="#fff"
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
        alignItems: "center",

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
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 17,
        color: "#fff",
        elevation: 5
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
        conversionType: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(Lenths)
