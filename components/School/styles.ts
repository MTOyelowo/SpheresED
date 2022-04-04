import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginLeft: 1, 
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCE6F1'
    },
    image: {
    width: 50,
    height: 50,
    },
    text: {
        color: '#133746',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;