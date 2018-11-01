import { StackNavigator } from "react-navigation"
import {
    Time,
    Mass,
    Power,
    Angle,
    Force,
    Energy,
    Lenths,
    Volume,
    Velocity,
    Pressure,
    Formulas,
    Categorry,
    Temperature,
    ResponsiveTest,
    DrowerCategory
} from "./Components"



const Routes = StackNavigator({
    DrowerCategory: {
        screen: DrowerCategory
    },
    Categorry: {
        screen: Categorry
    },
    Force: {
        screen: Force
    },
    Pressure: {
        screen: Pressure
    },
    Velocity: {
        screen: Velocity
    },
    Angle: {
        screen: Angle
    },
    ResponsiveTest: {
        screen: ResponsiveTest
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
        // initialRouteName: "Categorry"
    })


export default Routes