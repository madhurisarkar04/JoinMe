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
  Switch,
  View,
  Image,
  ScrollView,   
  TouchableNativeFeedback
} from 'react-native';
import Search from 'react-native-search-box';
import {Event} from './models/models';
import DatePicker from 'react-native-datepicker'
import { EventService } from './service/eventService';

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

  createEvent(){

    var service = new EventService();
    if(this.state.event && this.state.event.name){
        if(!this.state.event.id){
            service.createEvent(this.state.event);
        }
        else{
            
        }        
    }
  }

  onChange(updatedEvent){
    this.setState({
        event: {...this.state.event, ...updatedEvent}
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView>
      <View style={styles.container}>
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
            style={{fontSize: 20}}
            multiline={true}
            numberOfLines={4}
            value={this.state.event.description}
            placeholder="Write aboutyour event here!"
            onChangeText={(text) => this.onChange({description: text})}
            />
           <View style={{marginTop: 20,flexDirection: 'row'}}> 
                <DatePicker
                style={styles.datePickerStyles}
                date={this.state.event.startDate}
                mode="date"
                placeholder="Start Date"
                format="YYYY-MM-DD"
                minDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 0
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.onChange({startDate: date})}}
                />
                <Text style={styles.datePickerHIphen}> - </Text>
                <DatePicker
                    style={styles.datePickerStyles}
                    date={this.state.event.endDate}
                    mode="date"
                    placeholder="End Date"
                    format="YYYY-MM-DD"
                    minDate={this.state.event.startDate}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        right: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 0
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.onChange({endDate: date})}}
                />
            </View>  

             <Text style={styles.label}>
                Location
            </Text>
            <TextInput
            style={styles.formInput}
            value={this.state.event.location}
            placeholder="Type Location!"
            onChangeText={(text) =>this.onChange({location:text})}
            /> 

            <View style={styles.switchStyles}>
 

                <Switch
                onValueChange={(value) => this.onChange({isBillable: value})}
                    value={this.state.event.isBillable}
                    style={{marginBottom: 10}} />
                <Text style={{fontSize:20}}> {!this.state.event.isBillable && "Non - "} Billable Event</Text>

            </View>

            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.btnContainer}>
                    <Text style={styles.primaryBtn}>Create Event</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={()=>{navigate('Events')}}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.btnContainerCancel}>
                    <Text style={styles.primaryBtn}>Cancel</Text>
                </View>
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
    marginBottom:30,
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
    },
    datePickerStyles:{
        width: 170,
    },

    datePickerHIphen:{
        padding:10
    },

    switchStyles:{
        marginTop: 20,
        flexDirection: 'row'
    },
    btnContainer:{
        marginTop:15,
        alignItems: 'center',
        backgroundColor: '#00acec'
    },

    btnContainerCancel:{
        marginTop:15,
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    },
    primaryBtn:{
        margin: 15,
        fontSize:20,
         color:"#fff",
    }
});
