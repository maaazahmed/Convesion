import { StackNavigator } from "react-navigation"
import {
    Categorry,
    Formulas,
    Lenths,
    Mass,
    Temperature
} from "./Components"



const Routes = StackNavigator({
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
}, {
        navigationOptions: {
            header: null
        },
        initialRouteName: "Categorry"
    })


export default Routes