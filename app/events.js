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
  TouchableOpacity,
  DeviceEventEmitter,
  Image,
  FlatList
} from 'react-native';
import Search from 'react-native-search-box';
import { EventService } from './service/eventService';

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

  eventService = new EventService();
  constructor(){
    super();
    this.state = {
      events:[]
    };

    this.refreshEventsData = this.refreshEventsData.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      events: this.eventService.getEvents() || []
    });

    this.sub = DeviceEventEmitter.addListener('refreshData', (e)=>{
      var events = this.eventService.getEvents();
      alert(events.map(e=> e.name).join(',') + 'triger', events.map(e=> e.name).join(''));
      setTimeout(()=>{
        this.setState({
          events: events || []
        });
      },500);
      
      this.refreshEventsData();
    });
  }

  refreshEventsData(){
    this.setState({
      events: this.eventService.getEvents() || []
    });
  }

  componentDidUpdate(){
    var events = this.eventService.getEvents();
    if(this.state.events != events)
    this.setState({
      events: events || []
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Search
            ref="search_box"
          />

          {
            this.state.events.map(e=>{
              return <View>
                <View style={{ width: 20, height: 20, marginTop: 10, backgroundColor: e.color }}>
                  </View>
                  <View>
                    <Text style={{ fontSize: 22, paddingLeft: 15 }}>{e.name}</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 15 }}>
                      <Text style={{ marginLeft: 15 }}>{e.description}</Text>
                    </Text>
                  </View>
              </View>
            })
          }
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
