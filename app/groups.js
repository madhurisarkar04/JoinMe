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
  ScrollView,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import Search from 'react-native-search-box';

export class Group {
  constructor(args) {
    this.id = args.id;
    this.name = args.name;
    this.users = args.users;
  }
}

export default class GroupScreen extends React.Component {
  groups;
  constructor() {
    super();
    this.groups = [new Group({
      id: '1',
      name: 'Room mates',
      users: [{
        id: 1,
        name: "Venkatesh",
        email: 'venkatesh@gmail.com',
        phoneNumber: '9190405060'
      }]
    }), new Group({
      id: '2',
      name: 'School Friends',
      users: [{
        id: 1,
        name: "Venkatesh",
        email: 'venkatesh@gmail.com',
        phoneNumber: '9190405060'
      }]
    }), new Group({
      id: '3',
      name: 'B.Tech Friends',
      users: [{
        id: 1,
        name: "Venkatesh",
        email: 'venkatesh@gmail.com',
        phoneNumber: '9190405060'
      }]
    }), new Group({
      id: '4',
      name: 'Techies!!',
      users: [{
        id: 1,
        name: "Venkatesh",
        email: 'venkatesh@gmail.com',
        phoneNumber: '9190405060'
      }]
    })];
  }
  static navigationOptions = {
    title: 'Groups'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Search
            ref="search_box"
          />
          <View style={styles.bodyView}>
            <FlatList
              data={this.groups}
              renderItem={({ item }) => <View>
                <TouchableHighlight>
                  <View style={styles.itemCss} >
                    <Image style={styles.itemImg} source={require('./images/groupimage.jpg')}></Image>
                    <View style={styles.itemContent}>
                      <Text style={styles.name}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  bodyView: {

  },
  itemCss: {
    backgroundColor: '#ffffff',
    height: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 30,
    marginBottom: 1
  },
  itemImg: {
    width: 30,
    height: 30
  },
  itemContent: {
    height: 50,
    flex: 3,
    paddingLeft: 30,
    justifyContent: 'center'
  },
  name: {
    color: '#000000',
    fontSize: 20
  }
});
