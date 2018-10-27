import { StackNavigator } from "react-navigation"
import {
    Categorry,
    Formulas,
    Lenths,
    Mass
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
}, {
        navigationOptions: {
            header: null
        },
        initialRouteName: "Categorry"
    })


export default Routes