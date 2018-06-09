/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Button,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Search from 'react-native-search-box';

export default class EventsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      title: "Events",
      headerStyle: { 
        paddingRight: 10, 
        paddingLeft: 10, 
       },
      headerTitleStyle:{
        width:100,
      },
      headerRight: (<TouchableOpacity onPress={() => navigation.navigate("NewEvent")} title="New">
                  <Text> + New Event</Text>
            </TouchableOpacity>) // custom component
    };
  };
  constructor(){
    super();
  }

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
