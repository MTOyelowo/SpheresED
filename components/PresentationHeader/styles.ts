import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',

    },
    lesson: {
        marginLeft: 5,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#2C7FA3',
        padding: 2
    },
    line: {
        marginTop: 4,
        color: '#2C7FA3',
        padding: 2
    },
    tutor: {
        paddingLeft: 3,
        marginTop: 4,
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#2C7FA3'
    
    },
    buttons:{
        padding: 7.5,
    },
    texts: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;