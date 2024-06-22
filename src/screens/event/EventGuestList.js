import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";

import Ticket from "../../Ticket";
import eventUsersList from "../../api/data/eventUsersList.json";
import EventBottomSheet from "../../components/EventBottomSheet";

const EventGuestList = () => {
  const [showEventBoottomSheet, setShowEventBoottomSheet] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventPressed = (item) => {
    setSelectedEvent(item);
    setShowEventBoottomSheet(true);
  };
  const renderItem = ({ item }) => (
    <Pressable style={styles.card} onPress={() => eventPressed(item)}>
      <Image
        source={Ticket.image.eventImage}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.eventName}>{item.eventName}</Text>
        <Text style={styles.hostName}>by {item.hostName}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Upcoming Events</Text>

      <FlatList
        data={eventUsersList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
      {showEventBoottomSheet ? (
        <EventBottomSheet
          onClose={() => {
            setShowEventBoottomSheet(false);
          }}
          selectedEvent={selectedEvent}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Ticket.colors.background,
  },
  list: {
    gap: 16,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
  image: {
    width: "100%",
    // height: Ticket.constant.screenWidth * 0.3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "orange",
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  hostName: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2F2E41",
  },
  eventName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2F2E41",
  },
  headerTitle: {
    color: "#2F2E41",
    fontSize: 26,
    fontWeight: "600",
    padding: 20,
  },
});

export default EventGuestList;
