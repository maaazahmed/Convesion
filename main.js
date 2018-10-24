import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Routes from "./src/index"
import { Provider } from "react-redux"
import store from "./src/store/index"



export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store} >
          <Routes />
        </Provider>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderTopColor: "#312e3f",
  },
});
