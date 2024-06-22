import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CustomInputField = (props) => {
  return (
    <TextInput
      ref={props.inputRef}
      style={[styles.inputField, props.inputFieldStyle]}
      placeholder={props.placeholderText}
      placeholderTextColor={"#6C63FF"}
      keyboardType={props.keyboardType}
      // secureTextEntry={secure}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
      returnKeyType={props.returnKeyType}
      value={props.value}
      readOnly={props.readOnly ? props.readOnly : false}
      multiline={props.multiline ? props.multiline : false}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "100%",
    padding: 8,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    fontWeight: "600",
    fontSize: 26,
    opacity: 0.3,
  },
});

export default CustomInputField;
