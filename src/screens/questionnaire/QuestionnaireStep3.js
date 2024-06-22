import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const options = ["Yes", "No"];

const QuestionnaireStep3 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.option} onPress={() => selectOption(item)}>
      <Text style={styles.optionText}>{item}</Text>
      {selectedOption === item && (
        <Ionicons name="checkmark-circle" size={24} color="#6C63FF" />
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={options}
      renderItem={renderOption}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  questionText: {
    color: "#2F2E41",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
  },
  flatListContainer: {
    width: "100%",
    gap: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff55",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
  },
  optionText: {
    color: "#8D86FE",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default QuestionnaireStep3;
