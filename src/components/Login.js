import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native"

const Login = ({ navigation }) => {
    const gotoPage = (screen) => navigation.navigate(screen)
    return (
        <View>
            <Text style={styles.title}>Coffee Shop</Text>
            <Image
                source={require('../images/login.png')}
                style={styles.imagen}
            />
            <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Usuario" />
                <TextInput style={styles.input} placeholder="Contrasenia" />
                <TouchableOpacity onPress={() => gotoPage('Home')} style={styles.btnLogin}>
                    <Text style={styles.textBtnLogin}>Iniciar Sesion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGoogle}>
                    <Image style={styles.logoGoogle} source={require('../images/logoGoogle.png')} />
                    <Text style={styles.textBtnGoogle}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        marginTop: '20%',
        color: '#8b4513',
        fontWeight: 'bold',
        marginHorizontal: 'auto'
    },
    imagen: {
        width: 200,
        height: 200,
        marginHorizontal: 'auto',
        margin: 20
    },
    formContainer: {
        width: '90%',
        marginHorizontal: 'auto'
    },
    input: {
        borderWidth: 1.5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderColor: '#8b4513',
        borderRadius: 50
    },
    btnLogin: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#8b4513',
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 50,
        backgroundColor: '#8b4513'
    },
    textBtnLogin: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    logoGoogle: {
        width: 30,
        height: 30,
        marginRight: 20,

    },
    btnGoogle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#8b4513',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        margin: 10,
    },
    textBtnGoogle: {
        color: '#8b4513',
        fontWeight: 'bold',
        fontSize: 15
    }
})
export { Login }