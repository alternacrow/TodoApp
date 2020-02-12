import React, { FC, Fragment, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  SafeAreaView
} from "react-native";

type Todo = {
  id: number;
  title: string;
  description: string;
  done: boolean;
};

const SAMPLE_TODOS: Todo[] = [
  {
    id: 1,
    title: "todo 1",
    description: "description 1",
    done: false
  },
  {
    id: 2,
    title: "todo 2",
    description: "description 2",
    done: false
  },
  {
    id: 3,
    title: "todo 3",
    description: "description 3",
    done: false
  }
];

type Mode = "list" | "add";

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [mode, setMode] = useState<Mode>("list");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeMode = (mode: Mode) => {
    setMode(mode);
  };

  const addTodo = (todo: Todo) => {
    setTodos(todos => [...todos, todo]);
  };

  const resetInput = () => {
    setTitle("");
    setDescription("");
  };

  const handlePlus = () => {
    changeMode("add");
  };

  const handleCancel = () => {
    changeMode("list");
  };

  const handleAdd = () => {
    if (!title || !description) return;

    const newTodo: Todo = {
      id: todos[todos.length - 1].id + 1,
      title,
      description,
      done: false
    };
    addTodo(newTodo);

    changeMode("list");
  };

  useEffect(() => {
    setTodos(SAMPLE_TODOS);
  }, []);

  useEffect(() => {
    if (mode === "list") {
      resetInput();
    }
  }, [mode]);

  return (
    <Fragment>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.title_todo_list_container}>
            <Text style={styles.title_todo_list}>Todo List</Text>
          </View>
          <View style={styles.plus_button}>
            <TouchableOpacity onPress={() => handlePlus()}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={todos}
            renderItem={({ item: todo }) => {
              return (
                <View style={styles.todo_container}>
                  <Text numberOfLines={1} style={styles.todo_title}>
                    {todo.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.todo_description}>
                    {todo.description}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
      <Modal visible={mode === "add"} animationType={"slide"}>
        <View style={styles.modal}>
          <View style={styles.cancel_button}>
            <TouchableOpacity onPress={() => handleCancel()}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title_add_todo}>Add Todo</Text>

          <View style={styles.textinput_frame}>
            <TextInput
              placeholder={"Title"}
              value={title}
              onChangeText={text => setTitle(text)}
              style={styles.textinput}
            />
          </View>
          <View style={styles.textinput_frame}>
            <TextInput
              placeholder={"Description"}
              value={description}
              onChangeText={text => setDescription(text)}
              style={styles.textinput}
            />
          </View>
          <View style={styles.add_button}>
            <TouchableOpacity onPress={() => handleAdd()}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  container: {
    flex: 1
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title_todo_list_container: {
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  title_todo_list: {
    fontSize: 32,
    fontWeight: "bold",
    color: "royalblue"
  },
  title_add_todo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "royalblue",
    marginBottom: 40
  },
  todo_container: {
    height: 90,
    justifyContent: "center",
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  todo_title: {
    fontSize: 24
  },
  todo_description: {
    fontSize: 16,
    marginTop: 5
  },
  textinput_frame: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30
  },
  textinput: {
    width: 200,
    height: 40,
    fontSize: 24
  },
  plus_button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 30
  },
  plus: {
    fontSize: 32,
    fontWeight: "bold",
    color: "royalblue"
  },
  cancel_button: {
    position: "absolute",
    top: 60,
    right: 30
  },
  cancel: {
    fontSize: 22,
    color: "royalblue"
  },
  add_button: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "royalblue",
    marginTop: 50
  },
  add: {
    fontSize: 24,
    color: "white"
  }
});
