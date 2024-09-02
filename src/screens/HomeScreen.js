import { View } from "react-native"
import { Home } from "../components/Home"

const HomeScreen = (props) => {
    const { navigation } = props
    return (
        <View>
            <Home navigation={navigation} />
        </View>
    )
}
export { HomeScreen }