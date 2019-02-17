import React from 'react';
import { ScrollView } from 'react-native';
import TodoDetail from './TodoDetail';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          title: 'todo 1',
          detail: 'esto es un todo',
        },
        {
          title: 'todo 2',
          detail: 'esto es un todo',
        },
        {
          title: 'todo 3',
          detail: 'esto es un todo',
        },
        {
          title: 'todo 4',
          detail: 'esto es un todo',
        },
        {
          title: 'todo 5',
          detail: 'esto es un todo',
        },
      ],
    };
  }

  renderTodos() {
    return this.state.todos.map(todo => <TodoDetail key={todo.title} todoItem={todo} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderTodos()}
      </ScrollView>
    );
  }
}
