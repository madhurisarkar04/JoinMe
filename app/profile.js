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
  Image, Button, TouchableNativeFeedback
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
      <ScrollView>
        <View style={styles.userContainer}>
          <Image style={styles.userIcon} source={require('./images/pavanProfile.jpg')}></Image>
          <Text style={styles.userName}>{userProfile.userName}</Text>
        </View>
        <View style={styles.iconTiles}>
          <View>
            <TouchableNativeFeedback>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/account.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>Profile</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View>
            <TouchableNativeFeedback>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/bell.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>Notifications</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View>
            <TouchableNativeFeedback>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/events_user.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>My Events</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View>
            <TouchableNativeFeedback>
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/group_icon.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>My Groups</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View>
            <TouchableNativeFeedback style={styles.btnCss}>
              <Text style={styles.logOut}>LOG OUT</Text>
            </TouchableNativeFeedback>
          </View>
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
  },
  userContainer: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
    //justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    marginBottom: 10
  },
  iconTiles: {
    margin: 20
  },
  userIcon: {
    //padding: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userName: {
    fontSize: 20,
    color: '#717171',
    fontWeight: 'bold'
  },
  itemCss: {
    backgroundColor: '#ffffff',
    height: 65,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 30,
    marginBottom: 20
  },
  btnCss: {
    backgroundColor: '#d9534f',
    height: 65,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    //paddingLeft: 30,
    marginBottom: 20
  },
  logOut: {
    alignItems: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold'
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
