/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image, TouchableHighlight
} from 'react-native';
import EventsScreen from './events';

export default class Home extends Component {
    static navigationOptions = {
        title: 'JOIN ME',
        headerStyle: {
            display: 'none'
        }
    };
    constructor() {
        super();
        this.onEventsPressButton = this.onEventsPressButton.bind(this);
    }

    onEventsPressButton() {
        navigate('Events', { name: 'Jane' })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.bodyContent}>
                    <TouchableHighlight onPress={() => navigate('Events', { name: 'Jane' })} >
                        <View style={styles.itemCss} >
                            <Image style={styles.itemImg} source={require('./images/events.png')}></Image>
                            <View style={styles.itemContent}>
                                <Text style={styles.name}>Events</Text>
                                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing.</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('Group', { name: 'Jane' })} >
                        <View style={styles.itemCss}>
                            <Image style={styles.itemImg} source={require('./images/groups.png')}></Image>
                            <View style={styles.itemContent}>
                                <Text style={styles.name}>Groups</Text>
                                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing.</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('Profile', { name: 'Jane' })} >
                        <View style={styles.itemCss}>
                            <Image style={styles.itemImg} source={require('./images/userDashboard.png')}></Image>
                            <View style={styles.itemContent}>
                                <Text style={styles.name}>My Profile</Text>
                                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing.</Text>
                            </View>
                        </View>
                    </TouchableHighlight >
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        alignItems: 'stretch'
    },
    navigation: {
        backgroundColor: 'white',
        height: 50
    },
    logoImg: {
        alignSelf: 'center'
    },
    bodyContent: {
        backgroundColor: '#e0e0e0',
        padding: 20,
        paddingBottom: 0,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    itemCss: {
        backgroundColor: '#ffffff',
        height: 170,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 10,
        paddingLeft: 30,
        marginBottom: 20
    },
    itemImg: {
        width: 60,
        height: 60
    },
    itemContent: {
        height: 150,
        flex: 3,
        paddingLeft: 30,
        justifyContent: 'center',
    },
    name: {
        color: '#000000',
        fontSize: 26
    },
    description: {
        color: '#717171',
        fontSize: 20
    }
});
