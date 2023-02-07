import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Checked from "../../assets/common/check";
import UnChecked from "../../assets/common/un-check";
import DeleteTodo from "../../assets/common/delete-todo";
import { deleteTodo, upDateTodo } from "../../sotre/slice/todoSlice";
import { useDispatch } from "react-redux";
const TodoItems = ({ todos }) => {
  const dispatch = useDispatch();
  const pressUpdate = (index) => {
    console.log(index);
    dispatch(upDateTodo(index));
  };
  return (
    <View>
      {todos.map((v, i) => {
        console.log(v);
        return (
          <View key={v.text + i} style={styles.itemContainer}>
            <Pressable
              onPress={() => pressUpdate(v.id)}
              hitSlop={10}
              style={styles.checkedBox}
            >
              {v.state ? (
                <Checked style={styles.itemCheckedBoxIcon} />
              ) : (
                <UnChecked style={styles.itemUnCheckedBoxIcon} />
              )}
            </Pressable>
            <Text style={v.state ? styles.itemTextCecked : styles.itemText}>
              {v.text}
            </Text>
            <Pressable
              style={[styles.deleteBtn, styles.deleteBtnDone]}
              hitSlop={10}
            >
              <DeleteTodo />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TodoItems;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
    overflow: "scroll",
  },
  itemUnCheckedBoxIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckedBoxIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 20,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextCecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteBtn: {
    opacity: 0.8,
  },
  deleteBtnDone: {
    opacity: 0.3,
  },
});
