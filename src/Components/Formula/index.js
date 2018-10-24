import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions, StyleSheet } from "react-native"
import { Container, Content, Header, Icon } from 'native-base';
import { connect } from "react-redux"


const { width, height } = Dimensions.get("window")
class Formulas extends Component {
    render() {
        const formulaList = this.props.formulaList.formulas

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
                <Content>
                    {formulaList.map((val, index) => {
                        return (
                            <TouchableOpacity key={index} activeOpacity={0.5} style={styles.listContainer} >
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
        padding: 15,
    },
    listText: {
        fontSize: 18,
        color: "#312e3f"
    }
})



const mapStateToProp = (state) => {
    return ({
        formulaList: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(Formulas)
