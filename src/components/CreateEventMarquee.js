import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

export default function CreateEventMarquee({ events, CARD_WIDTH = 280,onScroll }) {
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const scrollPosition = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const maxScroll = (events.length - 1) * CARD_WIDTH;

      scrollPosition.current += 10 * direction;

      if (scrollPosition.current >= maxScroll) {
        scrollPosition.current = maxScroll;
        setDirection(-1); // Reverse direction
      } else if (scrollPosition.current <= 0) {
        scrollPosition.current = 0;
        setDirection(1); // Forward direction
      }

      scrollRef.current?.scrollTo({
        x: scrollPosition.current + 10,
        animated: true,
      });
    }, 140); // Adjust speed (lower = faster)

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <Animated.ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled={false}
      onScroll={onScroll}
      snapToInterval={CARD_WIDTH}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false} // Disable manual scroll for pure marquee
    >
      {events.map((event, index) => (
        <View style={styles.eventsContainer} key={index}>
          <Image source={event.image} style={styles.eventImage} />
        </View>
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  eventsContainer: {
    height: '100%',
    width: 280,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  eventImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 40,
  },
});
