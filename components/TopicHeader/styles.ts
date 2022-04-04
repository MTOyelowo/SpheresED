import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    margin: 10
},
image: {
    width: 160,
    height: 160,
    margin: 12,
    borderRadius: 15
},
topic: {
    color: '#133746',
    fontSize: 20,
    fontWeight: 'bold',
},
container2: {
flexDirection: 'row',
},
schoolName: {
    color: '#133746',
    margin: 3,
    fontSize: 16
},
dot:{
    fontSize: 20,
    fontWeight: 'bold',
},
course: {
    color: '#133746',
    margin: 3,
    fontSize: 16
},
button: {
    margin: 5,
    backgroundColor: '#2C7FA3',
    width: 80,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
},
buttonText: {
    color: 'white',
    margin: 3,
    fontSize: 20,
    fontWeight: 'bold',
}
});

export default styles;