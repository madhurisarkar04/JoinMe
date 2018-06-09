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
  TextInput,
  View,
  Image
} from 'react-native';
import Search from 'react-native-search-box';
import {Event} from './models/models';

export default class EventForm extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  constructor(){
    super();
    this.state = {
        event: new Event({
            name:'',
            description: '',
            startDate:'',
            endDate:'',
            location:'',
            isBillable: false
        })
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(updatedEvent){
    this.setState({
        event: {...this.state.event, ...updatedEvent}
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>

        </View>
        <View style={styles.formBody}>
            <Text style={styles.label}>
                Event Name
            </Text>
            <TextInput
            style={styles.formInput}
            value={this.state.event.name}
            placeholder="Type your event name here!"
            onChangeText={(text) =>this.onChange({name:text})}
            />

            <Text style={styles.label}>
                Description
            </Text>
            <TextInput
            multiline={true}
            style={styles.formInput}
            value={this.state.event.description}
            placeholder="Write aboutyour event here!"
            onChangeText={(text) => this.onChange({description: text})}
            />
                
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
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    flex:1
  },
  formBody:{
    margin:10,
    marginBottom: 30
  },
  formInput:{
      height: 40,
      paddingTop:10,
      paddingBottom:10,
      fontSize:20
    },
    label:{
        fontSize:20,
        marginTop:20
    }
});
