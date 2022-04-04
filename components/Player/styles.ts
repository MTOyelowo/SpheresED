import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
container: {
    alignSelf: 'baseline',
    width: '100%',
    height: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: 'white'
},
flatList: {
    flexGrow: 0
},
imageContainer: {
   backgroundColor: 'red' 
},
progress: {
    height: 5,
    backgroundColor: '#2C7FA3'
},
image: {
    width: '100%',
    height: '92.35%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 3
},
bottomContainer: {
    backgroundColor: 'white',
    height: '7%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
},
button: {
    width: '70%',
    justifyContent: 'space-around',
    flexDirection: 'row',
},
buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
lesson: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 2
},
});

export default styles;