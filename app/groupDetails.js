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
    ScrollView,
    View,
    Image,
    FlatList,
    TouchableNativeFeedback,
    TextInput
} from 'react-native';
import Search from 'react-native-search-box';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

export class Group {
    constructor(args) {
        this.id = args.id;
        this.name = args.name;
        this.users = args.users;
    }
}

export default class GroupDetailsScreen extends React.Component {
    groupSelected;
    popupDialog;
    static navigationOptions = {
        title: 'JOIN ME',
        headerStyle: {
            display: 'none'
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            text: props.navigation.state.params.name
        };
        this.groupSelected = {
            id: '4',
            name: 'Techies!!',
            users: [{
                id: 1,
                name: "Venkatesh",
                email: 'venkatesh@gmail.com',
                phoneNumber: '9190405060',
                image: './images/user.png'
            },
            {
                id: 2,
                name: "Umesh",
                email: 'Umesh@gmail.com',
                phoneNumber: '9190405060',
                image: './images/umesh.jpg'
            },
            {
                id: 3,
                name: "Madhuri",
                email: 'Madhuri@gmail.com',
                phoneNumber: '9190405060',
                image: './images/sarkar.JPEG'
            },
            {
                id: 4,
                name: "Jyothi",
                email: 'jyoti@gmail.com',
                phoneNumber: '9190405060',
                image: './images/jyothi.png'
            }]
        }
    }
    static navigationOptions = {
        title: 'Group Details'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <PopupDialog
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    >
                        <View>
                            <Text>{this.props.navigation.state.params.name}</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text}
                            />
                        </View>
                    </PopupDialog>
                    <View style={styles.itemCss} >
                        <Image style={styles.itemImg} source={require('./images/groupimage.jpg')}></Image>
                        <View style={styles.itemContent}>
                            <Text style={styles.name}>{this.props.navigation.state.params.name}</Text>
                        </View>
                        <TouchableNativeFeedback style={[styles.btnCss, styles.itemContent]} onPress={() => {
                            this.popupDialog.show();
                        }}>
                            <View style={[styles.editwidth]}>
                                <Image style={[styles.itemImg, styles.editImg]} source={require('./images/pencil_icon.png')}></Image>
                            </View>
                        </TouchableNativeFeedback >
                        <TouchableNativeFeedback style={[styles.btnCss, styles.itemContent]} >
                            <Text style={styles.exitBtn}>Exit Groups</Text>
                        </TouchableNativeFeedback>
                    </View>

                    <ScrollView>
                        <View style={styles.groupParticipants}>
                            <Text style={styles.participantsName}>{this.groupSelected.users.length} Participants</Text>
                            <View style={styles.itemCss} >
                                <Image style={styles.userIcon} source={require('./images/addUser.png')}></Image>
                                <View style={styles.itemContent}>
                                    <Text style={styles.name}>Add Participants</Text>
                                </View>
                            </View>
                            {this.groupSelected.users.map((user, index) => {
                                // var icon =require(user.image)

                                return <TouchableNativeFeedback>
                                    <View style={styles.itemCss} >
                                        <Image style={styles.userIcon} source={require('./images/user.png')}></Image>
                                        <View style={styles.itemContent}>
                                            <Text style={styles.name}>{user.name}</Text>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>;
                            })}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    bodyView: {

    },
    itemCss: {
        backgroundColor: '#ffffff',
        height: 70,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 30,
        marginBottom: 1
    },
    participantsName: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#5fba7de6'
    },
    itemImg: {
        width: 50,
        height: 50
    },
    userIcon: {
        width: 30,
        height: 30
    },
    editImg: {
        width: 30,
        height: 30
    },
    itemContent: {
        height: 70,
        flex: 3,
        paddingLeft: 30,
        justifyContent: 'center'
    },
    name: {
        color: '#000000',
        fontSize: 22
    },
    editwidth: {
        width: 30
    },
    btnCss: {
        backgroundColor: '#ffffff',
        height: 65,
        // flexDirection: 'row',
        //  flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        //paddingLeft: 30,
        marginBottom: 20,
        fontWeight: `100`,
        borderWidth: 1,
        borderColor: '#d9534f',
        paddingRight: 20
    },
    exitBtn: {
        alignItems: 'center',
        fontSize: 12,
        color: '#d9534f',
        // fontWeight: 'bold'
    }
});
