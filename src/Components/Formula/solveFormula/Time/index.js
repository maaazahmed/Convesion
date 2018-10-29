import React, { Component } from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, TextInput, Image } from "react-native"
import { Container, Header, Icon } from 'native-base';
import { connect } from "react-redux"



const { width } = Dimensions.get("window")
class Time extends Component {

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
        if (conversoinType === "Day to Minute") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1440).toString()
            })
        }
        else if (conversoinType === "Hour to Minute") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 60).toString()
            })
        }
        else if (conversoinType === "Minute to Second") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 60).toString()
            })
        }

        else if (conversoinType === "Hour to Second") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 3600).toString()
            })
        }
        else if (conversoinType === "Year to Second") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * (365 * 24 * 3600)).toString()
            })
        }
        else if (conversoinType === "Gram to Stone") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 6350.293).toString()
            })
        }
        else if (conversoinType === "Gram to Ounce") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 28.35).toString()
            })
        }
        else if (conversoinType === "MiliMinute to Second") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1000).toString()
            })
        }
        else if (conversoinType === "Kilogram to Tonne") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1016.047).toString()
            })
        }
        else if (conversoinType === "Kilogram to Imperial-Tonne") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1016.047).toString()
            })
        }
    }


    valTwoHeandler(ev) {
        let numbeer = ev;
        const conversoinType = this.props.conversionType.conversoinType;
        if (conversoinType === "Day to Minute") {
            this.setState({
                valOne: (numbeer / 1440).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Hour to Minute") {
            this.setState({
                valOne: (numbeer / 60).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Minute to Second") {
            this.setState({
                valOne: (numbeer / 60).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Hour to Second") {
            this.setState({
                valOne: (numbeer / 3600).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Year to Second") {
            this.setState({
                valOne: (numbeer / (365*24*3600)).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Gram to Stone") {
            this.setState({
                valOne: (numbeer * 6350.293).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Gram to Ounce") {
            this.setState({
                valOne: (numbeer * 28.35).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "MiliMinute to Second") {
            this.setState({
                valOne: (numbeer / 1000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Kilogram to Tonne") {
            this.setState({
                valOne: (numbeer * 1016.047).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Kilogram to Imperial-Tonne") {
            this.setState({
                valOne: (numbeer * 1016.047).toString(),
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



export default connect(mapStateToProp, mapDispatchToProp)(Time)
