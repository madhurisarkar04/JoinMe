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
    ImageBackground,
    TextInput
} from 'react-native';
import Search from 'react-native-search-box';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

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
            groupName: props.navigation.state.params.groupDetails.name,
            groupDetails: props.navigation.state.params.groupDetails
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

    modifyGroupDetails() {
        var grpDetails = this.state.groupDetails;
        grpDetails.name = this.state.groupName;
        this.setState({
            groupDetails: grpDetails
        });
        this.props.navigation.state.params.updateGroupDetails(grpDetails);
        this.popupDialog.dismiss();
    }

    _refresh() {
        var context = this;
        return new Promise((resolve) => {
          //  setTimeout(() => { resolve() }, 2000)
          context.loadGroups();
        });
      }

    readRegisteredContacts() {
        simpleContacts.getContacts().then((contacts) => {
            console.log(contacts);
        });

    }

    render() {
        const { navigate } = this.props.navigation;
        var context = this;
        return (
            // <ScrollView>
            //     <View style={styles.container}>
            //         <PopupDialog
            //             ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            //         >
            //             <View>
            //                 <Text>{this.props.navigation.state.params.name}</Text>
            //                 <TextInput
            //                     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //                     onChangeText={(text) => this.setState({ text })}
            //                     value={this.state.text}
            //                 />
            //             </View>
            //         </PopupDialog>
            //         <View style={styles.itemCss} >
            //             <Image style={styles.itemImg} source={require('./images/groupimage.jpg')}></Image>
            //             <View style={styles.itemContent}>
            //                 <Text style={styles.name}>{this.props.navigation.state.params.name}</Text>
            //             </View>
            //             <TouchableNativeFeedback style={[styles.btnCss, styles.itemContent]} onPress={() => {
            //                 this.popupDialog.show();
            //             }}>
            //                 <View style={[styles.editwidth]}>
            //                     <Image style={[styles.itemImg, styles.editImg]} source={require('./images/pencil_icon.png')}></Image>
            //                 </View>
            //             </TouchableNativeFeedback >
            //             <TouchableNativeFeedback style={[styles.btnCss, styles.itemContent]} >
            //                 <Text style={styles.exitBtn}>Exit Groups</Text>
            //             </TouchableNativeFeedback>
            //         </View>

            //         <ScrollView>
            //             <View style={styles.groupParticipants}>
            //                 <Text style={styles.participantsName}>{this.groupSelected.users.length} Participants</Text>
            //                 <View style={styles.itemCss} >
            //                     <Image style={styles.userIcon} source={require('./images/addUser.png')}></Image>
            //                     <View style={styles.itemContent}>
            //                         <Text style={styles.name}>Add Participants</Text>
            //                     </View>
            //                 </View>
            //                 {this.groupSelected.users.map((user, index) => {
            //                     // var icon =require(user.image)

            //                     return <TouchableNativeFeedback>
            //                         <View style={styles.itemCss} >
            //                             <Image style={styles.userIcon} source={require('./images/user.png')}></Image>
            //                             <View style={styles.itemContent}>
            //                                 <Text style={styles.name}>{user.name}</Text>
            //                             </View>
            //                         </View>
            //                     </TouchableNativeFeedback>;
            //                 })}
            //             </View>
            //         </ScrollView>
            //     </View>
            // </ScrollView>
            <PTRView onRefresh={this._refresh} >
            <ScrollView>
                <View>
                    <PopupDialog
                        containerStyle={styles.popupContainer} dialogTitle={<DialogTitle title="Edit Group Name" />} ref={(popupDialog) => { this.popupDialog = popupDialog; }} height={350}
                    >
                        <View style={styles.popupInnerContainer}>
                            <TextInput
                                style={styles.formInput}
                                keyboardType='text'
                                value={this.state.groupName}
                                onChangeText={(text) => this.setState({ groupName: text })}
                                placeholder="Edit your group name!"

                            />
                            <View style={styles.btnContainer}>
                                <TouchableNativeFeedback
                                    onPress={this.modifyGroupDetails.bind(context)}
                                    background={TouchableNativeFeedback.SelectableBackground()}>
                                    <View style={styles.btnContainerAdd}>
                                        <Text style={styles.primaryBtn}>Update</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback
                                    onPress={() => this.popupDialog.dismiss()}
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


                    <ImageBackground style={styles.eventContainer} source={require('./images/groupimage.jpg')}>
                        <View style={styles.eventHeaderContainer}>
                            <View style={styles.headerRule}>
                                <View style={styles.groupcss} >
                                    {/* <Image style={styles.itemImg} source={require('./images/groupimage.jpg')}></Image> */}
                                    <View style={styles.gropuContent}>
                                        <Text style={styles.grpname}>{this.state.groupDetails.name}</Text>
                                    </View>
                                    <TouchableNativeFeedback style={[styles.btnCss, styles.itemContent]} onPress={() => {
                                        this.popupDialog.show();
                                    }}>
                                        <View style={[styles.editwidth]}>
                                            <Image style={[styles.itemImg, styles.editImg]} source={require('./images/pencil_icon.png')}></Image>
                                        </View>
                                    </TouchableNativeFeedback >
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <Text style={styles.participantsName}>{this.groupSelected.users.length} Participants</Text>
                    <View style={[styles.eventDescriptionContainer, styles.userCss]}>
                        <View style={[styles.itemCss, styles.contactsCss]}>
                            <ScrollView>
                                <View>
                                    <TouchableNativeFeedback onpress={this.readRegisteredContacts.bind(this)}>
                                        <View style={styles.userItemCss} >
                                            <Image style={styles.itemImg} source={require('./images/addUser.png')}></Image>
                                            <View style={styles.itemContent}>
                                                <Text style={styles.name}>Add Participants</Text>
                                            </View>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                                {this.groupSelected.users.map((item) => {
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
                            </ScrollView>
                        </View>
                    </View>

                </View>
            </ScrollView >
            </PTRView>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//     },
//     bodyView: {

//     },
//     itemCss: {
//         backgroundColor: '#ffffff',
//         height: 70,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         paddingLeft: 30,
//         marginBottom: 1
//     },
//     participantsName: {
//         fontSize: 20,
//         paddingLeft: 20,
//         paddingTop: 10,
//         paddingBottom: 10,
//         color: '#5fba7de6'
//     },
//     itemImg: {
//         width: 50,
//         height: 50
//     },
//     userIcon: {
//         width: 30,
//         height: 30
//     },
//     editImg: {
//         width: 30,
//         height: 30
//     },
//     itemContent: {
//         height: 70,
//         flex: 3,
//         paddingLeft: 30,
//         justifyContent: 'center'
//     },
//     name: {
//         color: '#000000',
//         fontSize: 22
//     },
//     editwidth: {
//         width: 30
//     },
//     btnCss: {
//         backgroundColor: '#ffffff',
//         height: 65,
//         // flexDirection: 'row',
//         //  flexWrap: 'wrap',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         //paddingLeft: 30,
//         marginBottom: 20,
//         fontWeight: `100`,
//         borderWidth: 1,
//         borderColor: '#d9534f',
//         paddingRight: 20
//     },
//     exitBtn: {
//         alignItems: 'center',
//         fontSize: 12,
//         color: '#d9534f',
//         // fontWeight: 'bold'
//     }
// });



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
        opacity: 0.6
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
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00acec',
        //  width: 50,
    },

    btnContainerCancel: {
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: '#d9534f',
        //width: 50
    },
    primaryBtn: {
        margin: 15,
        fontSize: 20,
        color: "#fff",

    },
    contactsCss: {
        marginTop: 20
    },
    popupContainer: {
        padding: 10
    },
    popupInnerContainer: {
        padding: 10
    },
    groupcss: {
        height: 70,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 30,
        marginBottom: 1
    },
    gropuContent: {
        height: 70,
        flex: 3,
        paddingLeft: 30,
        justifyContent: 'center'
    },
    grpname: {
        color: 'black',
        fontSize: 28
    },
    participantsName: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#5fba7de6'
    }
});
