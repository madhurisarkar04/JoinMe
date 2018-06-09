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
  Image, Button,TouchableHighlight 
} from 'react-native';
import Search from 'react-native-search-box';
import Service from './service/service';

export default class ProfileScreen extends React.Component {
  helper;
  userProfile;
  constructor() {
    helper = new Service();
    userProfile = this.helper.getUserProfile();
  }

  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <Image source={this.userProfile.userIcon}></Image>
          <Text>{this.userProfile.userName}</Text>
        </View>
        <View>
          <View>
            <TouchableHighlight onPress={} >
              <View style={styles.itemCss} >
                <Image style={styles.itemImg} source={require('./images/account.png')}></Image>
                <View style={styles.itemContent}>
                  <Text style={styles.name}>Profile</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            
          </View>
          <View></View>
          <View></View>
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
    width: 60,
    height: 60
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
