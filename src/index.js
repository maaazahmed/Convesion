import { StackNavigator } from "react-navigation"
import { Categorry } from "./Components"



const Routes = StackNavigator({
    Categorry: { screen: Categorry }
}, {
        navigationOptions: {
            header: null
        }
    })


export default Routes