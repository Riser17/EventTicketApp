import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CustomInputField from "../../components/CustomInputField";
import Ticket from "../../Ticket";
import QuestionnaireStep4 from "./QuestionnaireStep4";
import QuestionnaireStep3 from "./QuestionnaireStep3";

const EventQuestionnaire = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const nextButtonPressed = () => {
    setActiveQuestion((prev) => prev + 1);
  };

  const backButtonPressed = () => {
    setActiveQuestion((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const renderQuestion = () => {
    switch (activeQuestion) {
      case 1:
        return (
          <>
            <Text style={styles.questionText}>Company/Organization:</Text>
            <CustomInputField
              value={companyName}
              placeholderText="Write your answer here"
              placeholderTextColor="#6C63FF"
              onChangeText={(value) => setCompanyName(value)}
            />
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.questionText}>Job Title:</Text>
            <CustomInputField
              value={jobTitle}
              placeholderText="Write your answer here"
              placeholderTextColor="#6C63FF"
              onChangeText={(value) => setJobTitle(value)}
            />
          </>
        );
      case 3:
        return (
          <>
            <Text style={styles.questionText}>Are you a current student?:</Text>
            <QuestionnaireStep3 />
          </>
        );
      case 4:
        return (
          <>
            <Text style={styles.questionText}>
              Where did you hear about this event?:
            </Text>
            <QuestionnaireStep4 />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={["#CBC1FF", "#F8F8F8"]}
      style={styles.gradientContainer}
      end={{ x: 2, y: 0.9 }}
      start={{ x: 0, y: 0.6 }}
    >
      <View style={styles.questionContainer}>
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={backButtonPressed}>
            <Ionicons name="arrow-back" size={24} color="#6C63FF" />
          </TouchableOpacity> */}
        <Text style={styles.questionNumber}>
          QUESTION {activeQuestion} OF 4
        </Text>
        {/* </View> */}
        {renderQuestion()}
      </View>
      {activeQuestion !== 4 && (
        <Pressable style={styles.button} onPress={nextButtonPressed}>
          <Text style={styles.buttonText}>Next question</Text>
        </Pressable>
      )}
      {activeQuestion == 4 && (
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Claim ticket</Text>
        </Pressable>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  questionContainer: {
    paddingHorizontal: Ticket.constant.screenWidth * 0.1,
    gap: 8,
    marginTop: Ticket.constant.screenHeight * 0.2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  questionNumber: {
    color: "#6C63FF",
    fontSize: 14,
    fontWeight: "600",
    // marginLeft: 8,
  },
  questionText: {
    color: "#2F2E41",
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
    position: "absolute",
    bottom: 80,
    left: "10%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default EventQuestionnaire;
