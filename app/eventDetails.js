
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
    ImageBackground,
    ScrollView,
    FlatList,
    TouchableNativeFeedback
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
            attendees: [{
                id: 1,
                name: "Venkatesh",
                email: 'venkatesh@gmail.com',
                phoneNumber: '9190405060'
            }, {
                id: 2,
                name: "Jyothi",
                email: 'jyothi@gmail.com',
                phoneNumber: '9190405061'
            }, {
                id: 3,
                name: "Jyoti",
                email: 'jyoti@gmail.com',
                phoneNumber: '9190405063'
            }, {
                id: 4,
                name: "Pavan",
                email: 'pavan@gmail.com',
                phoneNumber: '9190405160'
            }, {
                id: 5,
                name: "Umesh",
                email: 'umesh@gmail.com',
                phoneNumber: '9190405360'
            }, {
                id: 6,
                name: "Madhuri",
                email: 'madhuri@gmail.com',
                phoneNumber: '9198405060'
            }],
        };

        var startDate = new Date(eventDetails.startDate);
        var endDate = new Date(eventDetails.endDate);
        return (
            <ScrollView>
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
                        <Text style={styles.eventDate}>
                            {startDate.getUTCMonth()}/{startDate.getUTCDate()}/{startDate.getUTCFullYear()} - {endDate.getUTCMonth()}/{endDate.getUTCDate()}/{endDate.getUTCFullYear()}
                        </Text>
                    </View>

                    <View style={styles.eventDescriptionContainer}>
                        <Text style={[styles.itemCss, styles.descriptionCss]}>
                            {eventDetails.description}
                        </Text>
                    </View>
                    <View style={[styles.eventDescriptionContainer, styles.userCss]}>
                        <View style={styles.itemCss}>
                            {/* {eventDetails.attendees.map((attendee) => {
                                return <Image
                                    style={{ width: 25, height: 25 }}
                                    source={require('./images/user.png')}
                                />
                            })} */}
                            <FlatList
                                data={eventDetails.attendees}
                                renderItem={({ item }) => <View>
                                    <TouchableNativeFeedback>
                                        <View style={styles.userItemCss} >
                                            <Image style={styles.itemImg} source={require('./images/user.png')}></Image>
                                            <View style={styles.itemContent}>
                                                <Text style={styles.name}>{item.name}</Text>
                                            </View>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>}
                            />
                        </View>
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
    eventDateContainer: {
        padding: 15,
        paddingLeft: 20,
        backgroundColor: "#5fba7de6",

    },
    eventDate: {
        fontSize: 20,
        color: "#ffffff"
    },
    eventDescription: {
        fontSize: 15,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
    eventDescriptionContainer: {
        padding: 20,
        paddingBottom: 10,
        backgroundColor: '#e0e0e0',
    },
    itemCss: {
        backgroundColor: '#ffffff',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        //borderRadius: 10,
    },
    descriptionCss: {
        padding: 10
    },
    userContainer: {

    },
    userCss: {
        paddingTop: 0
    },
    userItemCss: {
        backgroundColor: '#ffffff',
        height: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 1
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
});

