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
  TouchableOpacity
} from 'react-native';
import Search from 'react-native-search-box';
import { GroupService } from './service/groupService';
import PTRView from 'react-native-pull-to-refresh';

export class Group {
  constructor(args) {
    this.id = args.id;
    this.name = args.name;
    this.users = args.users;
  }
}

export default class GroupScreen extends React.Component {
  allGroups;
  groupService = new GroupService();
  constructor() {
    super();
    this.state = {
      groups: []
    }

  }

  componentDidMount() {
    this.loadGroups();
  }

  _refresh() {
    var context = this;
    return new Promise((resolve) => {
      //  setTimeout(() => { resolve() }, 2000)
      context.loadGroups();
    });
  }
  // componentDidUpdate() {
  //   this.loadGroups();
  // }

  loadGroups() {
    this.allGroups = this.groupService.getGroups();
    this.setState({
      groups: this.allGroups
    });
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      title: "Groups",
      headerStyle: {
        paddingRight: 10,
        paddingLeft: 10,
      },
      headerTitleStyle: {
        width: 100,
      },
      headerRight: (<TouchableOpacity onPress={() => navigation.navigate("NewGroup")} title="New">
        <Text> + New Group</Text>
      </TouchableOpacity>) // custom component
    };
  };
  _refresh() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, 2000)
    });
}


  handleResults(results) {
    var groups = this.allGroups.filter((e, i) => {
      return e.name.toLowerCase().indexOf(results.toLowerCase()) != -1
    });
    this.setState({
      groups: groups || []
    });
  }

  updateGroupDetails(groupDetails) {
    var index = this.state.groups.findIndex((g) => { return g.id == groupDetails.id });
    this.state.groups[index] = groupDetails;
    this.groupService.updateGroup(groupDetails);
    this.setState({
      groups: this.state.groups
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <PTRView onRefresh={this._refresh} >
        <ScrollView>
          <View style={styles.container}>
            <Search
              ref="search_box"
              placeholder="Search"
              backgroundColor="#5fba7de6"
              inputBorderRadius={0}
              onSearch={this.handleResults.bind(this)}
            />
            <View style={styles.bodyView}>
              {this.state.groups.map((item) => {
                return <View>
                  <TouchableNativeFeedback onPress={() => navigate('GroupDetailsScreen', { groupDetails: item, updateGroupDetails: this.updateGroupDetails.bind(this) })}>
                    <View style={styles.itemCss} >
                      <Image style={styles.itemImg} source={require('./images/groupimage.jpg')}></Image>
                      <View style={styles.itemContent}>
                        <Text style={styles.name}>{item.name}</Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              })}
            </View>
          </View>
        </ScrollView>
      </PTRView>
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
    height: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 30,
    marginBottom: 1
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
  name: {
    color: '#000000',
    fontSize: 20
  }
});
