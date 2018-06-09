
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
    Image,
    ImageBackground
} from 'react-native';
import Search from 'react-native-search-box';

export default class EventDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Event',
    };

    render() {
        const { navigate } = this.props.navigation;
        const eventDetails = {
            eventId: 1,
            eventName: 'Outing Event',
            description: "Masti Masti",
            eventLocation: "Madhapur",
            startDate: "2018-06-09T00:00:00",
            endDate: "2018-06-09T00:00:00",
            isBillable: "true",
            attendees: "UserA, UserB, UserC, UserD, UserE",
        };
        var attendees = eventDetails.attendees.split(',');
        var startDate = new Date(eventDetails.startDate);
        var endDate = new Date(eventDetails.endDate);
        return (

            <View style={styles.container}>


                <ImageBackground style={styles.eventContainer} source={require('./images/eventBackImg1.jpg')}>
                    <View style={styles.eventHeaderContainer}>
                        <View style={styles.headerRule}>

                            <Text style={styles.eventHeaderText}>
                                <Image source={require("./images/events.png")} style={styles.eventImg} /> {eventDetails.eventName}
                            </Text>
                        </View>
                        <Text style={styles.eventLocationText}>
                            {eventDetails.eventLocation}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.eventDateContainer}>
                    <Text >
                        {startDate.getUTCMonth()}/{startDate.getUTCDate()}/{startDate.getUTCFullYear()} - {endDate.getUTCMonth()}/{endDate.getUTCDate()}/{endDate.getUTCFullYear()}
                    </Text>
                </View>

                <View>
                    <Text>
                        {eventDetails.description}
                    </Text>
                    {attendees.map((attendee) => {
                        return <Image
                            style={{ width: 25, height: 25 }}
                            source={require('./images/user.png')}
                        />
                    })}
                </View>
                <View>
                    {attendees.map((attendee) => {
                        return <Image
                            style={{ width: 25, height: 25 }}
                            source={require('./images/user.png')}
                        />
                    })}
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

        backgroundColor: '#F5FCFF',
        alignItems: 'stretch'
    },
    eventContainer: {
        alignItems: 'stretch',
        height: 150,
    },
    eventHeaderContainer: {
        padding: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    eventHeaderText: {
        fontSize: 30,
        color: "#ffffff",
        flexWrap: "wrap"

    },
    eventImg: {
        width: 60,
        height: 60,
        flexWrap: "wrap"
    },
    eventLocationText: {
        fontSize: 18,
        color: "#ffffff",
        paddingTop: 10

    },
    headerRule: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
    },
    eventDateContainer:{
        padding:20,
        height:50,
        backgroundColor:"#ffffff",
    }
});

