import { useState } from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const Cart = () => {
    const [quantity, setQuantity] = useState(1)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Cart</Text>
            <View style={{ marginTop: 20, height: '90%' }}>
                <ScrollView horizontal={false} style={{ marginBottom: 0 }} >
                    <View style={styles.cardItem}>
                        <View style={styles.container1}>
                            <Image source={require('../images/americano.png')} style={styles.iconItem} />
                            <View>
                                <Text style={styles.titleItem}>American Coffee</Text>
                                <Text>With sugar</Text>
                                <Text style={styles.textPrice}>$12.00</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text>Size: Small</Text>
                                <Text>Sugar: No sugar</Text>
                                <Text>Quantity: 2</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../images/plus.png')} style={styles.btnPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardItem}>
                        <View style={styles.container1}>
                            <Image source={require('../images/americano.png')} style={styles.iconItem} />
                            <View>
                                <Text style={styles.titleItem}>American Coffee</Text>
                                <Text>With sugar</Text>
                                <Text style={styles.textPrice}>$12.00</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text>Size: Small</Text>
                                <Text>Sugar: No sugar</Text>
                                <Text>Quantity: {quantity}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                                <Image source={require('../images/plus.png')} style={styles.btnPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardItem}>
                        <View style={styles.container1}>
                            <Image source={require('../images/americano.png')} style={styles.iconItem} />
                            <View>
                                <Text style={styles.titleItem}>American Coffee</Text>
                                <Text>With sugar</Text>
                                <Text style={styles.textPrice}>$12.00</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text>Size: Small</Text>
                                <Text>Sugar: No sugar</Text>
                                <Text>Quantity: 2</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../images/plus.png')} style={styles.btnPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardItem}>
                        <View style={styles.container1}>
                            <Image source={require('../images/americano.png')} style={styles.iconItem} />
                            <View>
                                <Text style={styles.titleItem}>American Coffee</Text>
                                <Text>With sugar</Text>
                                <Text style={styles.textPrice}>$12.00</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text>Size: Small</Text>
                                <Text>Sugar: No sugar</Text>
                                <Text>Quantity: 2</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../images/plus.png')} style={styles.btnPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardItem}>
                        <View style={styles.container1}>
                            <Image source={require('../images/americano.png')} style={styles.iconItem} />
                            <View>
                                <Text style={styles.titleItem}>American Coffee</Text>
                                <Text>With sugar</Text>
                                <Text style={styles.textPrice}>$12.00</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text>Size: Small</Text>
                                <Text>Sugar: No sugar</Text>
                                <Text>Quantity: 2</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../images/plus.png')} style={styles.btnPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardItem}>
                        <View style={styles.container1}>
                            <Image source={require('../images/americano.png')} style={styles.iconItem} />
                            <View>
                                <Text style={styles.titleItem}>American Coffee</Text>
                                <Text>With sugar</Text>
                                <Text style={styles.textPrice}>$12.00</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text>Size: Small</Text>
                                <Text>Sugar: No sugar</Text>
                                <Text>Quantity: 2</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../images/plus.png')} style={styles.btnPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardItem}>
                        <View style={styles.container1}>
                            <Image source={require('../images/americano.png')} style={styles.iconItem} />
                            <View>
                                <Text style={styles.titleItem}>American Coffee</Text>
                                <Text>With sugar</Text>
                                <Text style={styles.textPrice}>$12.00</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text>Size: Small</Text>
                                <Text>Sugar: No sugar</Text>
                                <Text>Quantity: 2</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../images/plus.png')} style={styles.btnPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerData}>
                        <View>
                            <View style={styles.priceFinal}>
                                <Text style={styles.text}>Subtotal:</Text>
                                <Text style={styles.text}>$12.00</Text>
                            </View>
                            <View style={styles.priceFinal}>
                                <Text style={styles.text}>Discount:</Text>
                                <Text style={styles.text}>$2.00</Text>
                            </View>
                            <View style={styles.priceFinal}>
                                <Text style={styles.text}>Total:</Text>
                                <Text style={styles.text}>$10.00</Text>
                            </View>
                        </View>
                        <Text style={styles.textPayment}>Payment</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../images/paypal.png')} style={styles.payIcons} />
                            <Image source={require('../images/visa.png')} style={styles.payIcons} />
                            <Image source={require('../images/mastercard.png')} style={styles.payIcons} />
                        </View>
                        <TouchableOpacity style={styles.btnBuy}>
                            <View style={styles.contentBtnBuy}>
                                <Icon
                                    name="dollar"
                                    style={styles.iconBtnBuy}
                                />
                                <Text style={styles.textBtnBuy}>
                                    Buy
                                </Text>
                            </View>
                        </TouchableOpacity>
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
        paddingBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 20,
        color: "#737373"
    },
    cardItem: {
        width: '90%',
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 5,
        marginBottom: 20,
    },
    iconItem: {
        width: 140,
        height: 130,
        margin: 10,
        borderRadius: 20
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleItem: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    textPrice: {
        fontWeight: 'bold'
    },
    btnPlus: {
        width: 40,
        height: 40
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20
    },
    containerData: {
        height: 200,
        width: '90%',
        marginHorizontal: 'auto',
        marginBottom: 100
    },
    priceFinal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        marginVertical: 5
    },
    btnBuy: {
        width: '100%',
        marginHorizontal: 'auto',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#00512C',
        borderRadius: 10,
        elevation: 2
    },
    iconBtnBuy: {
        color: '#fff',
        fontSize: 20,
        marginRight: 10
    },
    contentBtnBuy: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textBtnBuy: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    payIcons: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textPayment: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#737373'
    }
})
export { Cart }