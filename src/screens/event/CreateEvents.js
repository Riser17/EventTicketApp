import { BlurView } from 'expo-blur';
import React from 'react';
import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Animated, { FadeIn, FadeInUp, interpolate, SlideInUp, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import image from '../../../assets/image';
import CreateEventMarquee from '../../components/CreateEventMarquee';

const CARD_WIDTH = 280;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const events = [
    {
        id: 1,
        image: image.event1
    },
    {
        id: 2,
        image: image.event2
    },
    {
        id: 3,
        image: image.event3
    },
    {
        id: 4,
        image: image.event4
    },
    {
        id: 5,
        image: image.event5
    },
    {
        id: 6,
        image: image.event6
    },
    {
        id: 7,
        image: image.event7
    }
]


const CreateEvents = ({navigation}) => {

    const scrollX = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler((e) => {
        scrollX.value = e.contentOffset.x / CARD_WIDTH;
    })

    const insets = useSafeAreaInsets();


    const BackdropImage = ({ image, scrollX,index }) => {
        const stylez = useAnimatedStyle(()=>{
            return {
                opacity: interpolate(
                    scrollX.value,
                    [index - 1, index, index + 1],
                    [0, 1, 0]
                )
            }
        })
        return (
            <Animated.Image source={image} style={[styles.backgroundImage,stylez]} />
        )
    }

    return (
        <View style={styles.container}>
            {/* Background Image */}
            <View style={StyleSheet.absoluteFillObject}>
                {events.map((event, index) => (
                    <BackdropImage image={event.image} index={index} scrollX={scrollX} key={index}   />
                ))}
            </View>

            <View style={styles.backgroundView} />

            {/* Blur overlay */}
            <BlurView intensity={100} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    {/* Scrollable Image Cards */}
                    <Animated.View
                        style={styles.scollViewContainer(insets)}
                        entering={SlideInUp.springify().mass(1).damping(30)}
                    >
                        <CreateEventMarquee
                        events={events}
                        onScroll={onScroll}
                        CARD_WIDTH={CARD_WIDTH}
                        />
                    </Animated.View>

                    {/* Bottom Info */}
                    <View style={styles.bottomInfoContainer}>
                        <Animated.Text
                            style={styles.titleText}
                            entering={FadeInUp.springify().mass(1).damping(30).delay(500)}
                        >
                            Welcome to
                        </Animated.Text>
                        <Animated.Text
                            style={styles.inviteText}
                            entering={FadeIn.duration(500).delay(500)}
                        >
                            RiserEvent Invites
                        </Animated.Text>
                        <Animated.Text
                            style={styles.descriptionText}
                            entering={FadeInUp.springify().mass(1).damping(30).delay(500)}
                        >
                            Create beautiful invitations for all your events.{"\n"}Anyone can receive invitation.
                        </Animated.Text>
                        <AnimatedPressable
                            style={styles.createButton}
                            entering={FadeInUp.springify().mass(1).damping(30).delay(500)}
                        >
                            <Text style={styles.createButtonText}>Create an Event</Text>
                        </AnimatedPressable>
                    </View>
                </SafeAreaView>
            </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    backgroundView: {
        ...StyleSheet.absoluteFill,
        backgroundColor: '#000',
        opacity: 0.5
    },
    scollViewContainer: (insets) => ({
        height: '60%',
        width: '100%',
        paddingTop: insets.top
    }),
    eventsContainer: {
        height: '100%',
        // width: CARD_WIDTH,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4
    },
    eventImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 40,
        resizeMode: 'cover'
    },
    bottomInfoContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 4,
        padding: 4,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        opacity: 0.6
    },
    inviteText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    descriptionText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff',
        opacity: 0.6,
        marginBottom: 20
    },
    createButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 12,
        paddingHorizontal: 18,
        alignItems: 'center',
        borderRadius: 18
    },
    createButtonText: {
        fontSize: 12,
        color: '#000',
        fontWeight: '600'
    }
})

export default CreateEvents;
