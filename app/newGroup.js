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
import { GroupService } from './service/groupService';
import PTRView from 'react-native-pull-to-refresh';

export default class NewGroupScreen extends React.Component {
  groupService = new GroupService();
  constructor(props) {
    super(props);
    this.groupSelected = {
      id: '',
      name: '',
      users: [{
        id: 1,
        name: "Venkatesh",
        email: 'venkatesh@gmail.com',
        phoneNumber: '9190405060',
        image: './images/user.png'
      }]
    }
    this.state = {
      groupName: '',
      groupDetails: this.groupSelected
    };
    this.groupSelected = {
      id: '',
      name: '',
      users: [{
        id: 1,
        name: "Venkatesh",
        email: 'venkatesh@gmail.com',
        phoneNumber: '9190405060',
        image: './images/user.png'
      }]
    }
  }

  modifyGroupDetails() {
    this.groupService.createGroup(groupDetails);
    //this.popupDialog.dismiss();
}

  render() {
   // const { params = {} } = navigation.state;
    return (<PTRView onRefresh={this._refresh} >
      <ScrollView>
        {/* <View>
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
          </View> */}
        <View style={styles.container}>


          <ImageBackground style={styles.eventContainer} source={require('./images/groupimage.jpg')}>
            <View style={styles.eventHeaderContainer}>
              <View style={styles.headerRule}>
                <View style={styles.groupcss} >
                  {/* <Image style={styles.itemImg} source={require('./images/groupimage.jpg')}></Image> */}
                  <View style={styles.gropuContent}>
                    {/* <Text style={styles.grpname}>{this.state.groupDetails.name}</Text> */}
                    <TextInput
                      style={styles.formInput}
                      keyboardType='text'
                      value={this.state.groupName}
                      onChangeText={(text) => this.setState({ groupName: text })}
                      placeholder="Enter your group name!"

                    />
                  </View>
                  {/* <TouchableNativeFeedback style={[styles.btnCss, styles.itemContent]} onPress={() => {
                    this.popupDialog.show();
                  }}>
                    <View style={[styles.editwidth]}>
                      <Image style={[styles.itemImg, styles.editImg]} source={require('./images/pencil_icon.png')}></Image>
                    </View>
                  </TouchableNativeFeedback > */}
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text style={styles.participantsName}>{this.groupSelected.users.length} Participants</Text>
          <View style={[styles.eventDescriptionContainer, styles.userCss]}>
            <View style={[styles.itemCss, styles.contactsCss]}>
              <ScrollView>
                <View>
                  <TouchableNativeFeedback>
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
          <View style={styles.btnContainer}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.btnContainerAdd}>
                <Text style={styles.primaryBtn}>Add</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.btnContainerCancel}>
                <Text style={styles.primaryBtn}>Cancel</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView >
    </PTRView>)
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