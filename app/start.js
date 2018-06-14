import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import {
    StackNavigator, createStackNavigator
} from 'react-navigation';
import EventsScreen from './events';
import EventDetailsScreen from './eventDetails';
import GroupScreen from './groups';
import ProfileScreen from './profile';
import Home from './home';
import EventForm from './eventForm';
import GroupDetailsScreen from './groupDetails';
import NewGroupScreen from './newGroup';

export default StackNavigator({
    Home: { screen: Home },
    Events: { screen: EventsScreen },
    Group: { screen: GroupScreen },
    Profile: { screen: ProfileScreen },
    NewEvent: { screen: EventForm },
    GroupDetailsScreen: { screen: GroupDetailsScreen },
    EventDetails: { screen: EventDetailsScreen },
    NewGroup: { screen: NewGroupScreen }
});