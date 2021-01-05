import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {storeData, retrieveData} from '../helper/AsyncStorage';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut() {
    storeData('ACCESS_TOKEN', '');
    storeData('REFRESH_TOKEN', '');
    this.props.navigation.navigate('Login');
  }
  render() {
    console.log('in profile', this.props);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Profile Detail</Text>
        <Button title="Log out" onPress={() => this.logOut()} />
      </SafeAreaView>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
