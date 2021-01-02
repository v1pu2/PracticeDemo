import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {generateToken, login, refresh_token} from '../Actions/AuthAction';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      code: '+91',
    };
  }
  async onSubmit() {
    // AsyncStorage.setItem('ACCESS_TOKEN', '');
    // AsyncStorage.setItem('REFRESH_TOKEN', '');
    this.props.generateToken();

    // const access_token = await AsyncStorage.getItem('ACCESS_TOKEN');
    // const refresh_token = await AsyncStorage.getItem('REFRESH_TOKEN');
    // console.log('access_token in login', access_token);
    // if (access_token) {
    //   this.props.login(this.state.phone);
    //   this.props.navigation.navigate('MainRoot');
    // } else {
    //   console.log('in else');
    // }
    // const error = await AsyncStorage.getItem('ERROR');
    // if (error === 401) {
    //   console.log('in roor');
    //   this.props.refresh_token(refresh_token);
    // }

    // if (this.props.data && this.props.data.access_token) {
    //   this.props.login();
    // }
    // this.props.navigation.navigate('MainRoot');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Mobile Number</Text>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => onChangeText(text)}
            value={this.state.code}
          />
          <TextInput
            style={styles.inputBox}
            placeholder={'Enter mobile numer'}
            onChangeText={(text) => this.setState({phone: text})}
            value={this.state.phone}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        <Button
          title="submit"
          onPress={() => this.onSubmit()}
          disabled={!this.state.phone || this.state.phone.length < 10}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('State', state);
  return {
    data: state,
  };
};
export default connect(mapStateToProps, {generateToken, login, refresh_token})(
  Login,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 14,
  },
});
