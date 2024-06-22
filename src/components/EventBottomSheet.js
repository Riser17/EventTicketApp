// EventBottomSheet.js

import React, { useCallback, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import BottomSheet, {
  BottomSheetFooter,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Animated, {
  FadeInDown,
  SlideInDown,
  SlideInUp,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const EventBottomSheet = (props) => {
  const navigation = useNavigation();

  const bottomSheetRef = React.useRef(null);

  const snapPoints = useMemo(() => ["60%", "80%"], []);

  const buyTicketPressed = () => {
    console.log("press");
    navigation.navigate("EventQuestionnaire");
  };

  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter
        {...props}
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 18,
          elevation: 5,
          backgroundColor: "#F8F8F8",
        }}
      >
        <Animated.View
          style={styles.buyButton}
          entering={FadeInDown.delay(200)}
        >
          <Pressable style={styles.button} onPress={buyTicketPressed}>
            <Text style={styles.buttonText}>Buy ticket</Text>
          </Pressable>
        </Animated.View>
      </BottomSheetFooter>
    ),
    []
  );
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      handleIndicatorStyle={{ backgroundColor: "#E0E0E0", width: "15%" }}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount={true}
      handleStyle={{
        backgroundColor: "#F8F8F8",
      }}
      containerStyle={{ borderTopLeftRadius: 50 }}
      style={{ borderRadius: 50, overflow: "hidden" }}
      footerComponent={renderFooter}
      onClose={props.onClose}
    >
      <View style={styles.modalContent}>
        {props.selectedEvent && (
          <>
            <BottomSheetScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalEventName}>
                {props.selectedEvent.eventName}
              </Text>
              <Text style={styles.modalHostName}>
                by {props.selectedEvent.hostName}
              </Text>
              <View style={styles.detailsContainer}>
                <View style={styles.row}>
                  <Icon name="calendar" size={20} color="#2F2E41" />
                  <View>
                    <Text style={styles.detailsText}>
                      {props.selectedEvent.eventDate}
                    </Text>
                    <Text style={styles.subDetailText}>
                      {props.selectedEvent.duration}
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Icon name="map-marker" size={20} color="#2F2E41" />
                  <View>
                    <Text style={styles.detailsText}>
                      {props.selectedEvent.location}
                    </Text>
                    <Text style={[styles.subDetailText, { color: "#6C63FF" }]}>
                      Join to see full address
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Icon name="ticket" size={20} color="#2F2E41" />
                  <View>
                    <Text style={styles.detailsText}>
                      {props.selectedEvent.ticketsLeft} tickets left
                    </Text>
                    <Text style={styles.subDetailText}>100+ invited</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Icon name="currency-usd" size={20} color="#2F2E41" />
                  <Text style={styles.detailsText}>
                    {props.selectedEvent.priceRange}
                  </Text>
                </View>
              </View>
              <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>About this event</Text>
                <Text style={styles.aboutText}>
                  {props.selectedEvent.about}
                </Text>
              </View>
              <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>Find this event</Text>
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    opacity: 0.7,
                    height: 166,
                    borderRadius: 24,
                  }}
                ></View>
              </View>
            </BottomSheetScrollView>
          </>
        )}
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 30,
  },
  modalEventName: {
    fontSize: 26,
    fontWeight: "600",
    color: "#2F2E41",
    marginBottom: 10,
  },
  modalHostName: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2F2E41",
  },
  detailsContainer: {
    marginVertical: 32,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginVertical: 12,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2F2E41",
  },
  subDetailText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#A5A5A5",
    lineHeight: 20,
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2F2E41",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2F2E41",
    lineHeight: 24,
  },
  findButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  findButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buyButton: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderTopColor: "#C2C2C2",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default EventBottomSheet;
