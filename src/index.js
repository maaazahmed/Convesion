import { StackNavigator } from "react-navigation"
import {
    Time,
    Mass,
    Power,
    Energy,
    Lenths,
    Volume,
    Formulas,
    Categorry,
    Temperature,
    ResponsiveTest
} from "./Components"



const Routes = StackNavigator({
    ResponsiveTest: {
        screen: ResponsiveTest
    },
    Categorry: {
        screen: Categorry
    },
    Formulas: {
        screen: Formulas
    },
    Lenths: {
        screen: Lenths
    },
    Mass: {
        screen: Mass
    },
    Temperature: {
        screen: Temperature
    },
    Time: {
        screen: Time
    },
    Energy: {
        screen: Energy
    },
    Volume: {
        screen: Volume
    },
    Power: {
        screen: Power
    },
}, {
        navigationOptions: {
            header: null
        },
        initialRouteName: "Categorry"
    })


export default Routes