import {
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    FlatList,
    ImageSourcePropType
    } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './styles';
import {Lesson} from '../../types';
import { Picture } from '../../types';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';


export type PlayerProps = {
    uri: string,
    tutor: string,
    lesson: string,

}

const Player = (props: PlayerProps) => {

    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [audioStatus, setAudioStatus] = useState(false);
    const [duration, setDuration,] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);



    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const componentDidMount = async () => {
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: false,
            playThroughEarpieceAndroid: true
        })

    }

    const playCurrectLesson = async () => {
        if (sound) {
           await sound.unloadAsync();
        }
        
        const { sound: newSound } = await Sound.createAsync(
            { uri: props.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        );

        setSound(newSound)

    }

    const stopCurrentLesson = async () => {
                
        if (audioStatus === false) {
            await sound?.stopAsync()
            await sound?.unloadAsync()
        }

        return () => {
            sound && sound.unloadAsync()
        }
    }

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.pauseAsync();
        } else {
            await sound.playAsync();
        }
    }

  
    useEffect(() => {
        // Play Audio
        playCurrectLesson();
        // Stop Audio
        stopCurrentLesson();
    }, [audioStatus])


    const getProgress = () => {
        if (sound === null || duration === null || position === null ) {
            return 0;
        }

        return (position / duration ) * 100;
    }

    const onBackwardPress =  async () => {
        if (sound === null || duration === null || position === null ) {
            return 0;
    }
        return  duration - 10;
    }

    const onForwardPress =  async () => {
        if (sound === null || duration === null || position === null ) {
            return 0;
    }
        return  duration + 10;
    }

    return(
        <View style={styles.container}>
                <View style={[styles.progress, {width: `${getProgress()}%`}]} />
                <View style={styles.bottomContainer}>
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <FontAwesome 
                                onPress={onBackwardPress}
                                name={'backward'}
                                size={26}
                                color={'#2C7FA3'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPlayPausePress}>
                                <FontAwesome name={isPlaying ? 'pause' : 'play'} size={26} color={'#2C7FA3'}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome 
                                onPress={onForwardPress}
                                name={'forward'}
                                size={26}
                                color={'#2C7FA3'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </View>
    )
}


export default Player;
