
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
    Image,
    ImageBackground,
    ScrollView,
    FlatList,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';


import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import Modal from 'react-native-modal'
import { Button } from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import { EventService } from './service/eventService';
import { Event } from './models/models';



export default class EventDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Event',
    };
    _refresh() {
        return new Promise((resolve) => {
            setTimeout(() => { resolve() }, 2000)
        });
    }

    eventId = 0;
    eventService = new EventService();
    attendees =  [{
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
    }];
    constructor(props){
        super();

        this.state = {
            event: new Event({})
        };
        
        if(props.navigation.state.params && props.navigation.state.params.eventId){
            this.eventId = props.navigation.state.params.eventId;
        }

        this.loadEventById = this.loadEventById.bind(this);
    }

    componentDidMount(){
        this.loadEventById(this.eventId);
    }

    loadEventById(eventId){
        var event  = this.eventService.getEventById(this.eventId);

        this.setState({
            event : {...event, attendees: this.attendees}
        });
        
    }

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
            totalFare: "",
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
            <PTRView onRefresh={this._refresh} >
                <ScrollView>
                    <View>
                        <PopupDialog
                            containerStyle={styles.popupContainer}  ref={(popupDialog) => { this.popupDialog = popupDialog; }} height={350}
                        >
                            <View style={styles.popupInnerContainer}>
                                <Text style={styles.label}>
                                    Fare
                            </Text>
                                <TextInput
                                    style={styles.formInput}
                                    keyboardType='numeric'
                                    value=""
                                    placeholder="Type your fare here!"
                                />
                                <Text style={styles.label}>
                                    Comment
                            </Text>
                                <TextInput
                                    style={styles.formInput}
                                    value=""
                                    placeholder="Type your comment here!"
                                />
                                <View style={styles.btnContainer}>
                                    <TouchableNativeFeedback
                                        onPress={this.createEvent}
                                        background={TouchableNativeFeedback.SelectableBackground()}>
                                        <View style={styles.btnContainerAdd}>
                                            <Text style={styles.primaryBtn}>Add</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback
                                        onPress={() => { navigate('EventsDetails', { eventId: 1 }) }}
                                        background={TouchableNativeFeedback.SelectableBackground()}>
                                        <View style={styles.btnContainerCancel}>
                                            <Text style={styles.primaryBtn}>Cancel</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </PopupDialog>
                    </View>
                    <View style={styles.container}>


                        <ImageBackground style={styles.eventContainer} source={require('./images/eventBackImg1.jpg')}>
                            <View style={styles.eventHeaderContainer}>
                                <View style={styles.headerRule}>

                                    <Text style={styles.eventHeaderText}>
                                        <Image source={require("./images/events.png")} style={styles.eventImg} /> {this.state.event.name}
                                    </Text>
                                </View>
                                <Text style={styles.eventLocationText}>
                                    {eventDetails.eventLocation}
                                </Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.eventDateContainer}>
                            <View style={styles.leftContainer}>
                                <Text style={[styles.eventDate]}>
                                    {startDate.getUTCMonth()}/{startDate.getUTCDate()}/{startDate.getUTCFullYear()} - {endDate.getUTCMonth()}/{endDate.getUTCDate()}/{endDate.getUTCFullYear()}
                                </Text>
                            </View>
                            <View style={styles.addFare}>
                                <Text style={[styles.eventDate, styles.addFareText]}
                                    onPress={() => {
                                        this.popupDialog.show();
                                    }}>
                                    + Add Fare
                            </Text>
                            </View>
                        </View>

                        <View style={styles.eventDescriptionContainer}>
                            <Text style={[styles.itemCss, styles.descriptionCss]}>
                                {eventDetails.description}
                            </Text>
                        </View>
                        <View style={[styles.eventDescriptionContainer, styles.userCss]}>
                            <View style={styles.itemCss}>
                                {eventDetails.attendees.map((item) => {
                                    return (<View>
                                        <TouchableNativeFeedback>
                                            <View style={styles.userItemCss} >
                                                <Image style={styles.itemImg} source={require('./images/user.png')}></Image>
                                                <View style={styles.itemContent}>
                                                    <Text style={styles.name}>{item.name}</Text>
                                                </View>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>)

                                })}


                            </View>
                        </View>

                    </View>
                </ScrollView>
            </PTRView>

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
        flex: 1,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#5fba7de6",
        flexDirection: "row"
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
        paddingLeft: 20,
        justifyContent: 'center'
    },
    addFare: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: 'row',

    },
    leftContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    addFareText: {
        fontSize: 18
    },
    popupDialog: {
        margin: 20
    },
    btnContainerAdd: {
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: '#00acec',

    },

    btnContainerCancel: {
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: '#e0e0e0',

    },
    primaryBtn: {
        margin: 15,
        fontSize: 20,
        color: "#fff",

    },
    popupContainer: {
        padding: 10
    },
    popupInnerContainer: {
        padding: 10
    },

});

