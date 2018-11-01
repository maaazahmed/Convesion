import React, { Component } from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, TextInput, Image } from "react-native"
import { Container, Header, Icon, Drawer } from 'native-base';
import { connect } from "react-redux"
import DrowerCategory from "../../DrowerCategory/index"
import { backtoSoveKey } from "../../../../store/action/action"



const { width } = Dimensions.get("window")
class Mass extends Component {
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
        this.props.backtoSoveKey("Mass")
        let type = conversionTypeName.split(" ")
        this.setState({
            placeholder1: type[0],
            placeholder2: type[2],
        })
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    valOneHeandler(ev) {
        let numbeer = ev;
        const conversoinType = this.props.conversionType.conversoinType;
        if (conversoinType === "Gram to Kilogram") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1000).toString()
            })
        }
        else if (conversoinType === "Gram to Miligram") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1000).toString()
            })
        }
        else if (conversoinType === "Gram to Microgram") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1000000).toString()
            })
        }

        else if (conversoinType === "Gram to Nanogram") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 1000000000).toString()
            })
        }
        else if (conversoinType === "Gram to Pound") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 453.592).toString()
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
        else if (conversoinType === "Miligram to Microgram") {
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
        else if (conversoinType === "Kilogram to US-Tonne") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 907.185).toString()
            })
        }
        else if (conversoinType === "Kilogram to Metrictone") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1000).toString()
            })
        }
        else if (conversoinType === "Kilogram to a.m.u") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 0.00000000000000000000000000166).toString()
            })
        }
    }


    valTwoHeandler(ev) {
        let numbeer = ev;
        const conversoinType = this.props.conversionType.conversoinType;
        if (conversoinType === "Gram to Kilogram") {
            this.setState({
                valOne: (numbeer * 1000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Gram to Miligram") {
            this.setState({
                valOne: (numbeer / 1000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Gram to Microgram") {
            this.setState({
                valOne: (numbeer / 1000000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Gram to Nanogram") {
            this.setState({
                valOne: (numbeer / 1000000000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Gram to Pound") {
            this.setState({
                valOne: (numbeer * 453.592).toString(),
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
        else if (conversoinType === "Miligram to Microgram") {
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
        else if (conversoinType === "Kilogram to US-Tonne") {
            this.setState({
                valOne: (numbeer * 907.185).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Kilogram to Metrictone") {
            this.setState({
                valOne: (numbeer * 10000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Kilogram to a.m.u") {
            this.setState({
                valOne: (numbeer * 0.00000000000000000000000000166).toString(),
                valTwo: ev
            })
        }
    }








    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                closedDrawerOffset={0}
                openDrawerOffset={0.3}
                content={<DrowerCategory navigation={this.props.navigation} />}
                onClose={() => this.closeDrawer()} >
                <Container style={{ backgroundColor: "#373447" }} >
                    <Header style={styles.Header} >
                        <View style={styles.heightIconCintainer} >
                            <TouchableOpacity
                                onPress={() => this.openDrawer()}
                                style={{ alignSelf: "flex-start" }}
                                activeOpacity={0.6} >
                                <Icon style={styles.heightIcon} name='menu' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.heightIconCintainer} >
                            <TouchableOpacity
                                onPress={() => this.openDrawer()}
                                style={{ alignSelf: "flex-end" }}
                                onPress={() => this.props.navigation.navigate("Categorry")}
                                activeOpacity={0.6} >
                                <Icon style={styles.heightIcon} name='home' />
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
            </Drawer>
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



export default connect(mapStateToProp, mapDispatchToProp)(Mass)
