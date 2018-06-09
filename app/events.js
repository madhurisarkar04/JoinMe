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
  Button,
  Text,
  View,
<<<<<<< HEAD
  TouchableOpacity,
  Image
=======
  Image,
  FlatList
>>>>>>> 1a1cea38942ad6ef9f751549dcd55e8bdafbc6b3
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
<<<<<<< HEAD
    // flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 20,
=======
    flex: 1,
>>>>>>> 1a1cea38942ad6ef9f751549dcd55e8bdafbc6b3
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
