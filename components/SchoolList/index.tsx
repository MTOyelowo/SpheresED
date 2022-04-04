import { View, Image, Text, FlatList } from 'react-native';
import { School } from '../../types';
import SchoolComponent from '../School';
import styles from './styles';

export type SchoolListProps = {
    schools: [School],
}

const SchoolList = (props: SchoolListProps) => (
    <View style={styles.container}>
        {/* List of Schools */}
        <FlatList 
            data={props.schools}
            renderItem={({ item }) => <SchoolComponent school={item}/>}
            keyExtractor={( item ) => item.id}
            showsVerticalScrollIndicator={false}/>
    </View>
)

export default SchoolList;