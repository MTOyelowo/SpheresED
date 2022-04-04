import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import Player from '../components/Player';
import lessonDetails from '../data/lessonDetails';
import PictureComponent from '../components/PictureComponent';
import PresentationHeader from '../components/PresentationHeader';
import { Dimensions } from 'react-native';
import { useRef } from 'react';


const {width, height} = Dimensions.get('screen')

const PresentationScreen = () => {

    const xScroll = useRef(new Animated.Value(0)).current; 

    return (
        <View style= {styles.container}>
            <View style= {styles.presentationHeader}>
                <PresentationHeader
                    lesson={lessonDetails.lesson}
                    tutor={lessonDetails.tutor} />
            </View>
            <View style={styles.imageContainer}>
                <Animated.FlatList 
                style={styles.flatList}
                data={lessonDetails.pictures}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate={'fast'}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: xScroll}}}], {useNativeDriver: true},)}
                renderItem={({item, index }) =>  {
                    const inputRange = [
                        ( index - 1 ) * width,
                        index * width,
                        ( index + 1 ) * width
                    ];
                    const outputRange = ['-90deg', '0deg', '-90deg'];

                    const translateX = xScroll.interpolate({inputRange, outputRange});
                    return (
                        <Animated.View style= {[styles.wrap, {transform: [{rotateZ: translateX}]}]}>
                            <PictureComponent picture={item} 
                            style={styles.pictures}/>
                        </Animated.View>
                    )
                }              
                }
                keyExtractor={(item) => item.id}
                />
            </View>
            <Player 
                uri={lessonDetails.uri}
                lesson={lessonDetails.lesson}
                tutor={lessonDetails.tutor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    presentationHeader:{
        height: '7%'
    },

    flatList: {
        flexGrow: 0,
    },

    imageContainer: {
        width,
        height: '86%',
        backgroundColor: 'white',
        paddingBottom: 5
    },
    pictures: {
        width: width - 150,
        resizeMode: 'cover',
    },
    wrap: {

    }
})

export default PresentationScreen;


