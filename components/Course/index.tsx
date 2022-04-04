import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback, } from "react-native"
import { Course } from '../../types'
import styles from './styles'
import CourseScreen from '../../screens/CourseScreen';

export type CourseProps = {
    course: Course,
}


const CourseComponent = (props: CourseProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate ('CourseScreen', { id: props.course.id })
    }

    return (
        <TouchableWithoutFeedback 
        onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.course.imageUri }} style={styles.image}/>
                <View style= {styles.textAlign}>
                    <Text style={styles.school}>{props.course.schoolName}</Text>
                    <Text style={styles.text}>{props.course.tutorNames}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CourseComponent;