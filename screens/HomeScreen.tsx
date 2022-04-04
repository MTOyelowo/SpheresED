import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseCategory from '../components/CourseCategory'
import courseCategories from '../data/courseCategories'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={courseCategories}
        renderItem={({ item }) => (<CourseCategory title={item.title}
        courses={item.courses}
        />
        )}
        keyExtractor={(item)  => item.id}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});