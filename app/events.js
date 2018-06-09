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
import Search from 'react-native-search-box';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Search
            ref="search_box"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch'
  }
});
