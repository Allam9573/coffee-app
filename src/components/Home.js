import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const Home = ({ navigation }) => {
    const gotoPage = (screen) => navigation.navigate(screen)
    return (
        <View style={styles.container}>
            <View>
                <ScrollView>
                    <View style={styles.barTop}>
                        <Image style={styles.userIcon} source={require("../images/iconUser.png")} />
                        <Text>Tegucigalpa, Honduras</Text>
                        <TouchableOpacity onPress={() => gotoPage('Cart')}>
                            <Icon name="cart-plus" style={{ fontSize: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textGretting}>Good Morning</Text>
                    <TextInput style={styles.inputSearch} placeholder="Search Coffee..." />
                    <Text style={styles.textGretting}>Categories</Text>
                    <View style={styles.scrollCoffeeContainer}>
                        <ScrollView horizontal={true} style={styles.scrollCoffees} showsHorizontalScrollIndicator={true} >
                            <TouchableOpacity onPress={() => Alert.alert('alv perrooo')} style={styles.btnCoffee}>
                                <Image source={require('../images/coffee.png')} style={styles.imageBtnCoffee} />
                                <Text style={styles.textBtnCoffee}>Cappucchino</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnCoffee}>
                                <Image source={require('../images/coffee.png')} style={styles.imageBtnCoffee} />
                                <Text style={styles.textBtnCoffee}>Americano</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnCoffee}>
                                <Image source={require('../images/coffee.png')} style={styles.imageBtnCoffee} />
                                <Text style={styles.textBtnCoffee}>Latte</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnCoffee}>
                                <Image source={require('../images/coffee.png')} style={styles.imageBtnCoffee} />
                                <Text style={styles.textBtnCoffee}>Ice Coffee</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnCoffee}>
                                <Image source={require('../images/coffee.png')} style={styles.imageBtnCoffee} />
                                <Text style={styles.textBtnCoffee}>Cappucchino</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView style={styles.cardCoffeeContainer} horizontal={true} showsHorizontalScrollIndicator={true}>
                            <View style={styles.cardCoffee}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard} />
                                <Text style={styles.textDescription}>Cappucchino</Text>
                                <Text style={styles.textDescription}>$8.00</Text>
                                <TouchableOpacity style={styles.btnAddCoffee}>
                                    <Text style={{ color: '#fff' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardCoffee}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard} />
                                <Text style={styles.textDescription}>Cappucchino</Text>
                                <Text style={styles.textDescription}>$8.00</Text>
                                <TouchableOpacity style={styles.btnAddCoffee}>
                                    <Text style={{ color: '#fff' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardCoffee}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard} />
                                <Text style={styles.textDescription}>Cappucchino</Text>
                                <Text style={styles.textDescription}>$8.00</Text>
                                <TouchableOpacity style={styles.btnAddCoffee}>
                                    <Text style={{ color: '#fff' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardCoffee}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard} />
                                <Text style={styles.textDescription}>Cappucchino</Text>
                                <Text style={styles.textDescription}>$8.00</Text>
                                <TouchableOpacity style={styles.btnAddCoffee}>
                                    <Text style={{ color: '#fff' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardCoffee}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard} />
                                <Text style={styles.textDescription}>Cappucchino</Text>
                                <Text style={styles.textDescription}>$8.00</Text>
                                <TouchableOpacity style={styles.btnAddCoffee}>
                                    <Text style={{ color: '#fff' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.textGretting}>Special Offer</Text>
                    <View>
                        <ScrollView horizontal={true} style={styles.scroll2}>
                            <View style={styles.cardScroll2}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard2} />
                                <Text style={styles.textDescription2}>Cappucchino</Text>
                                <Text style={styles.textDescription2}>$8.00</Text>
                                <TouchableOpacity style={styles.btnPlus}>
                                    <Image source={require('../images/plus.png')} style={styles.imageBtnPlus} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardScroll2}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard2} />
                                <Text style={styles.textDescription2}>Cappucchino</Text>
                                <Text style={styles.textDescription2}>$8.00</Text>
                                <TouchableOpacity style={styles.btnPlus}>
                                    <Image source={require('../images/plus.png')} style={styles.imageBtnPlus} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardScroll2}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard2} />
                                <Text style={styles.textDescription2}>Cappucchino</Text>
                                <Text style={styles.textDescription2}>$8.00</Text>
                                <TouchableOpacity style={styles.btnPlus}>
                                    <Image source={require('../images/plus.png')} style={styles.imageBtnPlus} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardScroll2}>
                                <Image source={require('../images/capuchino.png')} style={styles.imageCard2} />
                                <Text style={styles.textDescription2}>Cappucchino</Text>
                                <Text style={styles.textDescription2}>$8.00</Text>
                                <TouchableOpacity style={styles.btnPlus}>
                                    <Image source={require('../images/plus.png')} style={styles.imageBtnPlus} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    barTop: {
        marginTop: '10%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    userIcon: {
        width: 35,
        height: 35
    },
    textGretting: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
        color: '#888787'
    },
    inputSearch: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: '#EEEEEE'
    },
    btnCoffee: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        borderRadius: 50,
        width: 150,
        marginRight: 20,
        borderColor: '#8b4513',
        backgroundColor: '#8b4513'
    },
    imageBtnCoffee: {
        width: 20,
        height: 20
    },
    scrollCoffees: {
        height: 40,
        marginHorizontal: '5%',
        marginVertical: 5,

    },
    textBtnCoffee: {
        color: '#fff'
    },
    scrollCoffeeContainer: {
        paddingVertical: 20,
    },
    cardCoffeeContainer: {
        marginHorizontal: 20
    },
    cardCoffee: {
        borderWidth: 1,
        height: 200,
        borderColor: '#CECECE',
        borderRadius: 10,
        marginRight: 20
    },
    imageCard: {
        width: 132,
        height: 100,
        borderRadius: 10
    },
    btnAddCoffee: {
        backgroundColor: '#FF4C4C',
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    textDescription: {
        fontWeight: 'bold',
        marginVertical: 3,
        marginLeft: 10
    },

    // ultimo scroll
    cardScroll2: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 5,
    },
    scroll2: {
        marginLeft: 20
    },
    imageCard2: {
        width: 90,
        height: 70,
        marginHorizontal: 'auto',
        borderRadius: 5
    },
    imageBtnPlus: {
        width: 30,
        height: 30,
        marginVertical: 5,
        marginHorizontal: 'auto'
    },
    textDescription2: {
        marginHorizontal: 10
    }
})
export { Home }