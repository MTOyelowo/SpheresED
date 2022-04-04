import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";


const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create ({
    imageContainer: {
        width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: width -50,
        height: '100%',
        resizeMode: 'cover',
    },
})

export default styles;