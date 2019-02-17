import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import TodoList from './TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Todo App" />
        <TodoList />
      </View>
    );
  }
}
