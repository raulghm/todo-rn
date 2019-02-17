import React from 'react';
import {
  Text, View, Button,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class TodoDetail extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <View>
            <Text>{this.props.todoItem.title}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Text>{this.props.todoItem.detail}</Text>
        </CardSection>

        <CardSection>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Button title="Completar" onPress={() => console.log('Completar')} />
          </View>

          <View style={{ flex: 1 }}>
            <Button title="Cerrar" onPress={() => console.log('Cerrar')} />
          </View>
        </CardSection>
      </Card>
    );
  }
}
