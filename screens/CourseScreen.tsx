import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import courseDetails from '../data/courseDetails';
import TopicsListItem from '../components/TopicsListItem';


const CourseScreen = () => {

    const route = useRoute();
        console.log(route);
    useEffect(() => {
    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
                data={courseDetails.topics}
                renderItem={({ item }) => <TopicsListItem topic={item} />}
                keyExtractor={( item ) => item.id}
                />
        </View>
    )
}

export default CourseScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });