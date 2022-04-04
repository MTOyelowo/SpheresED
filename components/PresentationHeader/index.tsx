import { Text, Image, View, TouchableWithoutFeedback, TouchableOpacity, } from 'react-native'
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export type PresentationHeaderProps = {
    tutor: string
    lesson: string
}

const PresentationHeader = (props: PresentationHeaderProps) => {

    return (
        <View style={styles.topContainer}>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <FontAwesome 
                        name={'angle-double-left'}
                        size={26}
                        color={'#2C7FA3'}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.texts}>
                <Text style={styles.lesson}>{props.lesson}</Text>
                <Text style={styles.line}>|</Text>
                <Text style={styles.tutor}>{props.tutor}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                        <FontAwesome 
                            name={'angle-double-right'}
                            size={26}
                            color={'#2C7FA3'}
                        />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default PresentationHeader;