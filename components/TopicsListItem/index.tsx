import { Text, Image, View, TouchableWithoutFeedback } from 'react-native'

import styles from './styles';
import {Topic} from '../../types';
import { useNavigation } from '@react-navigation/native';

export type TopicsListItemProps = {
    topic: Topic
}

const TopicsListItem = (props: TopicsListItemProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate ('LessonScreen', { id: props.topic.id })
    }

    const { topic } = props;

    return (
        <TouchableWithoutFeedback
            onPress={onPress}>
            <View style={styles.container}>
            {/* Image */}
                <Image source={{ uri: topic.imageUri }} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.topic}>{topic.topic}</Text>
                    {/* Tutor */}
                    <Text style={styles.tutor}>{topic.tutor}</Text>
                </View>
            {/* Topic */}
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default TopicsListItem;