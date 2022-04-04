import React from 'react'
import { View, Image, Text } from "react-native"
import styles from './styles';
import { School } from '../../types';

export type SchoolProps = {
    school: School, 
}


const SchoolComponent = (props: SchoolProps) => (
    <View style={styles.container}>
        <Image source={{ uri: props.school.imageUri }} style={styles.image}/>
        <Text style={styles.text}>{props.school.schoolName}</Text>
    </View>
)

export default SchoolComponent;