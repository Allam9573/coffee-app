import { View } from "react-native"
import { Login } from "../components/Login"

const LoginScreen = (props) => {
    const { navigation } = props
    return (
        <View>
            <Login navigation={navigation} />
        </View>
    )
}
export { LoginScreen }