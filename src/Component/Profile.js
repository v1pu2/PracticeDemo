import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut() {
    console.log('logout');
    AsyncStorage.setItem('ACCESS_TOKEN', '');
    AsyncStorage.setItem('REFRESH_TOKEN', '');
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
