import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions, StyleSheet } from "react-native"
import { Container, Content, Header, Icon } from 'native-base';
import { connect } from "react-redux";
import { conversoinType } from "../../store/action/action"


const { width, height } = Dimensions.get("window")
class Formulas extends Component {
    solveEquation(data) {
        this.props.conversoinType(data)
        this.props.navigation.navigate(this.props.routKey.routeKey)
    }
    render() {
        const formulaList = this.props.formulaList.formulas
        return (
            <Container style={{ backgroundColor: "#f2f2f2" }} >
                <Header style={styles.Header} >
                    <View style={styles.heightIconCintainer} >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate(this.props.routKey.backtoSolve)}
                            activeOpacity={0.6} >
                            <Icon style={styles.heightIcon} name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content>
                    {formulaList.map((val, index) => {
                        return (
                            <TouchableOpacity
                                onPress={this.solveEquation.bind(this, val)}
                                key={index}
                                activeOpacity={0.5} style={styles.listContainer} >
                                <View
                                    style={styles.listBtn} >
                                    <Text style={styles.listText} >{val}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
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
        padding: 10,
    },
    listText: {
        // fontSize: 15,
        color: "#312e3f"
    }
})



const mapStateToProp = (state) => {
    return ({
        formulaList: state.root,
        routKey: state.root,
        backToSolve: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        conversoinType: (data) => {
            dispatch(conversoinType(data))
        },
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(Formulas)
