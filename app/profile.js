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
  Image, Button, TouchableHighlight
} from 'react-native';
import Search from 'react-native-search-box';
import Service from './service/service';

export default class ProfileScreen extends React.Component {
  helper;
  userProfile;
  constructor() {
    super();
    helper = new Service();
    userProfile = helper.userProfile;

  }

  static navigationOptions = {
    title: 'My Profile',
  };

  render() {
    const { navigate } = this.props.navigation;
    const userProfile = {
      userName: "Pavan Kumar",
      userIcon: "./images/user.png"
    }
    return (
      <View>
        <View style={styles.userContainer}>
          <Image style={styles.userIcon} source={userProfile.userIcon}></Image>
          <Text style={styles.userName}>{userProfile.userName}</Text>
        </View>
        <View>
          <View>
            <TouchableHighlight>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/account.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>Profile</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/bell.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>Notifications</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/events_user.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>My Events</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/group_icon.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>My Groups</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
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
  },
  userContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemCss: {
    backgroundColor: '#ffffff',
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 30,
    marginBottom: 20
  },
  itemImg: {
    width: 30,
    height: 30
  },
  itemContent: {
    height: 80,
    flex: 3,
    paddingLeft: 30,
    justifyContent: 'center',
  },
  name: {
    color: '#000000',
    fontSize: 26
  }
});
