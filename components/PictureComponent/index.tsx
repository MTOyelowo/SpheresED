import {View, Image, Text} from 'react-native'
import { Picture } from '../../types'
import styles from './styles'
import PresentationScreen from '../../screens/PresentationScreen'

export type PictureProps = {
    picture: Picture
}

const PictureComponent = (props: PictureProps) => {

    const { picture } = props;

    return (
        <View style={styles.imageContainer}>
            <Image source={{uri: picture.pictureUri}} style={styles.image}/>
        </View>
    )
}

export default PictureComponent;