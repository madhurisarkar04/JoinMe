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
import AppStart from './app/start';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <Text>EVENTO</Text>
          <Image source={require('./images/bell.png')} style={styles.bellIcon}></Image>
        </View>
        <AppStart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigation: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon:{
    alignItems:'right'
  }
});
