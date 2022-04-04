import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import topicDetails from '../data/topicDetails';
import LessonsListItem from '../components/LessonsListItem';
import TopicHeader from '../components/TopicHeader';

const LessonScreen = () => {

    const route = useRoute();
        console.log(route);
    useEffect(() => {
    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
                data={ topicDetails.lessons}
                renderItem={({ item }) => <LessonsListItem lesson={item} />}
                keyExtractor={( item ) => item.id}
                ListHeaderComponent={() => <TopicHeader topic={topicDetails}/>}
                />
        </View>
    )
}

export default LessonScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });