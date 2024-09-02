import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { CartScreen } from "../screens/CartScreen";

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Inicio de Sesion" component={LoginScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}
export { StackNavigation }