/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

//import LinearGradient from 'react-native-linear-gradient';
//import { List, ListItem} from "react-native-elements";

import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  FlatList
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
          <FlatList
            data={[
              {
                key: 1,
                name: "Event1",
                color: "#8d1845"
              },
              {
                key: 2,
                name: "Event2",
                color: "blue"
              },
              {
                key: 3,
                name: "Event3",
                color: "#188d2a"
              }, {
                key: 4,
                name: "Event4",
                color: "#05a59b"
              }

            ]}
            renderItem={({ item }) => <View style={styles.item}>
              <View style={{ width: 20, height: 20, marginTop: 10, backgroundColor: item.color }}>

              </View>
              <View>
                <Text style={{ fontSize: 22, paddingLeft: 15 }}>{item.name}</Text>
                <Text style={{ fontSize: 12, paddingLeft: 15 }}>
                  <Text>XYZ</Text>
                  <Text style={{ marginLeft: 15 }}>XYZ</Text>
                </Text>
              </View>
            </View>}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch'
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconContainer: {
    width: 50,
    backgroundColor: '#d2d2d2'
  }
});
