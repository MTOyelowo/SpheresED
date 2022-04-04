import {FlatList, View, StyleSheet} from 'react-native';
import styles from './styles';
import { Picture } from '../../types';
import { Dimensions } from 'react-native';


const pictures: string[] = [
        'https://www.niddk.nih.gov/-/media/Images/Health-Information/Digestive-Diseases/The_Digestive_System_450x531.jpg',
        'https://www.niddk.nih.gov/-/media/Images/Health-Information/Digestive-Diseases/The_Digestive_System_450x531.jpg',
        'https://www.clevelandclinic.org/healthinfo/ShowImage.ashx?PIC=4155&width=250',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Wid7_e_OnHetHbdHehRBh1hpUtibRpGCsg&usqp=CAU',
]

const PlayerImages = () => {
    return(
        
        <View style= {styles.container}>
            <FlatList 
            style={styles.flatList}
            data={pictures}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
                return 
                <View style={styles.imageContainer}/>
            }}
            />
        </View>
    )
}


export default PlayerImages;