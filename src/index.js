import { StackNavigator } from "react-navigation"
import {
    Categorry,
    Formulas,
    Lenths
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
}, {
        navigationOptions: {
            header: null
        },
        initialRouteName:"Categorry"
    })


export default Routes