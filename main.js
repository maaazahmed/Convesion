import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Routes  from "./src/index"



export default class Main extends Component {
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
