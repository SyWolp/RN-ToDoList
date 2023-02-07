import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const InputForm = ({ addList }) => {
  const [todoText, setTodoText] = useState("");

  const inputTodoText = (e) => {
    setTodoText(e);
  };

  const pressEvent = () => {
    addList(todoText);
    setTodoText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
        onChangeText={(e) => inputTodoText(e)}
        value={todoText}
        onSubmitEditing={pressEvent}
      />
      <Pressable
        hitSlop={10}
        pressRetentionOffset={50}
        style={styles.addbtn}
        onPress={pressEvent}
      >
        <Text style={styles.addBtnText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
  },
  inputField: {
    flex: 1,
    height: 42,
    borderRadius: 4,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    color: "#000",
    fontSize: 15,
    textAlignVertical: "center",
    padding: 5,
  },
  addbtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  addBtnText: {
    color: "white",
    fontSize: 25,
  },
});
