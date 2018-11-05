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
    Frequency
} from "./Components"



const Routes = StackNavigator({
    Categorry: {
        screen: Categorry
    },
    Force: {
        screen: Force
    },
    Frequency: {
        screen: Frequency
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