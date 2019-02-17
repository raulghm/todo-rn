import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: 'todoList',
    };
  }

  changeStateSection(section) {
    this.setState({ section });
  }

  showSections() {
    if (this.state.section === 'todoList') {
      return <TodoList />;
    }

    return <AddTodo />;
  }

  pickButton() {
    if (this.state.section === 'todoList') {
      return (
        <Button
          onPress={() => { this.changeStateSection('addTodo'); }}
          title="Add Todo"
        />
      );
    }

    return (
      <Button
        onPress={() => { this.changeStateSection('todoList'); }}
        title="Cancel"
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Todo App" />
        {this.showSections()}
        {this.pickButton()}
      </View>
    );
  }
}
