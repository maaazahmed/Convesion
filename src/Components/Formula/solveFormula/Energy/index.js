import React, { Component } from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, TextInput } from "react-native"
import { Container, Header, Icon, Drawer } from 'native-base';
import { connect } from "react-redux"
import DrowerCategory from "../../DrowerCategory/index"
import { backtoSoveKey } from "../../../../store/action/action"


const { width } = Dimensions.get("window")
class Energy extends Component {
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
        this.props.backtoSoveKey("Energy")
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
        if (conversoinType === "Joule to Kilojoule") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1000).toString()
            })
        }
        else if (conversoinType === "Joule to Erg") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 10000000).toString()
            })
        }
        else if (conversoinType === "Joule to Electronvolt") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 0.00000000000000000016021).toString()
            })
        }

        else if (conversoinType === "Joule to Calorie") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 4.2).toString()
            })
        }
        else if (conversoinType === "Joule to Kilocalorie") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 4184).toString()
            })
        }
        else if (conversoinType === "Joule to Watt-Hour") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 3600).toString()
            })
        }
        else if (conversoinType === "Joule to Kilowatt-Hour") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 3600000).toString()
            })
        }
        else if (conversoinType === "Joule to B.T.U") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1055).toString()
            })
        }
        else if (conversoinType === "Joule to U.S-Therm") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 105500000).toString()
            })
        }
        else if (conversoinType === "Joule to Foot-pound") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1.356).toString()
            })
        }
        else if (conversoinType === "a.m.u to Mev") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 931.5).toString()
            })
        }
        else if (conversoinType === "Kilogram to Mev") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer * 560843373500000000000000000000).toString()
            })
        }
        else if (conversoinType === "Electronvolt to Mev") {
            this.setState({
                valOne: ev,
                valTwo: (numbeer / 1000000).toString()
            })
        }
    }


    valTwoHeandler(ev) {
        let numbeer = ev;
        const conversoinType = this.props.conversionType.conversoinType;
        if (conversoinType === "Joule to Kilojoule") {
            this.setState({
                valOne: (numbeer * 1000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to Erg") {
            this.setState({
                valOne: (numbeer / 10000000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to Electronvolt") {
            this.setState({
                valOne: (numbeer * 0.00000000000000000016021).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to Calorie") {
            this.setState({
                valOne: (numbeer * 4.2).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to Kilocalorie") {
            this.setState({
                valOne: (numbeer * 4184).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to Watt-Hour") {
            this.setState({
                valOne: (numbeer * 3600).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to Kilowatt-Hour") {
            this.setState({
                valOne: (numbeer * 3600000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to B.T.U") {
            this.setState({
                valOne: (numbeer * 1055).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to U.S-Therm") {
            this.setState({
                valOne: (numbeer * 105500000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Joule to Foot-pound") {
            this.setState({
                valOne: (numbeer * 1.356).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "a.m.u to Mev") {
            this.setState({
                valOne: (numbeer / 931.5).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Kilogram to Mev") {
            this.setState({
                valOne: (numbeer / 560843373500000000000000000000).toString(),
                valTwo: ev
            })
        }
        else if (conversoinType === "Electronvolt to Mev") {
            this.setState({
                valOne: (numbeer * 1000000).toString(),
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
        backtoSoveKey: (data) => {
            dispatch(backtoSoveKey(data))
        }
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(Energy)
