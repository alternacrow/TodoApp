import React, { FC, Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView
} from "react-native";

const App: FC = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.title_todo_list_container}>
            <Text style={styles.title_todo_list}>Todo List</Text>
          </View>
          <View style={styles.plus_button}>
            <TouchableOpacity>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.todo_container}>
            <Text style={styles.todo_title}>todo 1</Text>
            <Text style={styles.todo_description}>description 1</Text>
          </View>
          <View style={styles.todo_container}>
            <Text style={styles.todo_title}>todo 2</Text>
            <Text style={styles.todo_description}>description 2</Text>
          </View>
          <View style={styles.todo_container}>
            <Text style={styles.todo_title}>todo 3</Text>
            <Text style={styles.todo_description}>description 3</Text>
          </View>
        </View>
      </SafeAreaView>
      <Modal visible={false} animationType={"slide"}>
        <View style={styles.modal}>
          <View style={styles.cancel_button}>
            <TouchableOpacity>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title_add_todo}>Add Todo</Text>
          <View style={styles.textinput_frame}>
            <TextInput placeholder={"Title"} style={styles.textinput} />
          </View>
          <View style={styles.textinput_frame}>
            <TextInput placeholder={"Description"} style={styles.textinput} />
          </View>
          <View style={styles.add_button}>
            <TouchableOpacity>
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
