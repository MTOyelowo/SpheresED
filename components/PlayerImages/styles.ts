import { StyleSheet } from "react-native";
import { Dimensions } from "react-native"; 

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        
        flexGrow: 0
    },
    imageContainer: {
        width,
        height: 100,
    },
})

export default styles;