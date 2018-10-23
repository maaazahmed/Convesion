import { StackNavigator } from "react-navigation"
import {
    Categorry,
    Formulas
} from "./Components"



const Routes = StackNavigator({
    Categorry: {
        screen: Categorry
    },
    Formulas: {
        screen: Formulas
    },


}, {
        navigationOptions: {
            header: null
        },
        initialRouteName:"Formulas"
    })


export default Routes