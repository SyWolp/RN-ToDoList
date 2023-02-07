import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TodoItems from "../components/Todo/Todo";
import InputForm from "../components/common/InputForm";
import { StatusBar } from "expo-status-bar";
import SafeViewAndroid from "../styleComponents/SafeViewAndroid";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../sotre/slice/todoSlice";

const MainScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [todoLists, setTodoLists] = useState({
    notClearTodo: [],
    clearTodo: [],
  });
  const addList = (todoText) => {
    dispatch(addTodo(todoText));
  };

  useEffect(() => {
    setTodoLists({
      notClearTodo: todos
        .filter((v) => v.state === false)
        .sort((a, b) => b.id - a.id),
      clearTodo: todos
        .filter((v) => v.state === true)
        .sort((a, b) => a.id - b.id),
    });
  }, [todos]);

  console.log(todoLists);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StatusBar />
      <Text style={styles.pageTitle}>MAIN</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoLists.notClearTodo.length ? (
          <TodoItems todos={todoLists.notClearTodo} />
        ) : (
          <Text>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료 된 일</Text>
        {todoLists.clearTodo.length ? (
          <TodoItems todos={todoLists.clearTodo} />
        ) : (
          <Text>완료 된 일이 없습니다.</Text>
        )}
      </View>
      <InputForm addList={addList} />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: "600",
  },
  listView: {
    overflow: "scroll",
  },
  listTitle: {},
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: "500",
  },
});
