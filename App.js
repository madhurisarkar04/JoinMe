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
  View,
  Image
} from 'react-native';
import AppStart from './app/start';
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.leftContainer}>
            <Image source={require('./app/images/evento.png')} style={[styles.text, { textAlign: 'left' }, styles.leftIcon]}></Image>
          </View>
          <View style={styles.rightContainer}>
            <Image source={require('./app/images/alarm.png')} style={styles.rightIcon}></Image>
          </View>
        </View>
        <AppStart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5fba7de6',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textEvento: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  rightIcon: {
    height: 25,
    width: 25,
    paddingRight: 40,
    resizeMode: 'contain',
  },
  leftIcon: {
    height: 80,
    width: 80,
    paddingRight: 40,
    resizeMode: 'contain'
  }
});
