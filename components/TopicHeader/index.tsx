import { Topic } from "../../types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles';

export type TopicHeaderProps = {
    topic: Topic
}

const TopicHeader = ( props: TopicHeaderProps) => {
    const { topic } = props;

    return (
        <View style={styles.container}>
            {/* Cover Image */}
            <Image source={{ uri: topic.imageUri}} style={styles.image}/>
            { /* Topic */ }
            <Text style={styles.topic}>{topic.topic}</Text>
            {/* Course and School */}
            <View style={styles.container2}>
                <Text style={styles.schoolName}>{topic.schoolName}</Text>
                <Text style={styles.dot}>.</Text>
                <Text style={styles.course}>{topic.course}</Text>
            </View>
            { /* Play Button */ }
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 

export default TopicHeader;