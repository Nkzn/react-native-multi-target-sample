import * as React from 'react';
import {
  ScrollView
} from 'react-native';
import Products from "../shared/Products";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 48, paddingHorizontal: 16 }}>
        <Products />
      </ScrollView>
    );
  }
}