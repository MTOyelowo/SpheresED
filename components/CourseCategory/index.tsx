import { Text, View, FlatList } from "react-native";
import { Course } from "../../types";
import CourseComponent from "../Course";
import styles from './styles';
import { Shadow } from "react-native-shadow-2";

export type CourseCategoryProps = {
    title: string,
    courses: [Course], 
}

const CourseCategory = (props: CourseCategoryProps) => (
        <View style={styles.container}>
            {/* Title of Category */}
            <Text style={styles.title}>{props.title}</Text>
            {/* List of Courses */}
            <FlatList 
                data={props.courses}
                renderItem={({ item }) => <CourseComponent course={item}/>}
                keyExtractor={( item ) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}/>
        </View>

)

export default CourseCategory;