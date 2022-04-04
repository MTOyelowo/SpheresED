import { Text, Image, View, TouchableWithoutFeedback  } from 'react-native'

import styles from './styles';
import {Lesson} from '../../types';
import { useNavigation } from '@react-navigation/native';

export type LessonsListItemProps = {
    lesson: Lesson
}

const LessonsListItem = (props: LessonsListItemProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate ('PresentationScreen', {id: props.lesson.id})
    }

    const { lesson } = props;

    return (
        <TouchableWithoutFeedback
            onPress={onPress}>
            <View style={styles.container}>
            {/* Image */}
            <Image source={{ uri: lesson.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
                {/* Lesson */}
                <Text style={styles.lesson}>{lesson.lesson}</Text>
                {/* Tutor and Duration */}
                <View style={styles.container2}>
                    <Text style={styles.tutor}>{lesson.tutor}</Text>
                    <Text style={styles.break}> | </Text>
                    <Text style={styles.duration}>{lesson.duration}</Text>
                </View>      
            </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LessonsListItem;