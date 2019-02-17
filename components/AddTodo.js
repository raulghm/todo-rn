import React from 'react';
import {
 Text, View, Button, TextInput,
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      value: '',
      error: '',
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View>
            <Text>Title</Text>
            <TextInput
              placeholder="title"
              autoCorrect={false}
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
            />
          </View>
        </CardSection>
        <CardSection>
          <View>
            <Text>Detail</Text>
            <TextInput
              placeholder="detail"
              autoCorrect={false}
              value={this.state.detail}
              onChangeText={detail => this.setState({ detail })}
            />
          </View>
        </CardSection>

        <CardSection>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Button title="Completar" onPress={() => console.log('click')} />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="Cerrar" onPress={() => console.log('click')} />
          </View>
        </CardSection>
      </Card>
    );
  }
}
