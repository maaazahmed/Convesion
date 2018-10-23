/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Categorry } from "./src/Components";
import Routes  from "./src/index"



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderTopColor:"#312e3f",
  },
});
