import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    ScrollView,
    Button,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
  } from 'react-native';

export default class EventsScreen extends React.Component {
    render(){
        return <View style={styles.container}></View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      alignItems: 'stretch'
    }
  });