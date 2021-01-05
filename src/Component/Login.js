import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {generateToken, login, refreshToken} from '../Actions/AuthAction';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {storeData, retrieveData} from '../helper/AsyncStorage';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      code: '+91',
    };
  }
  async componentDidMount() {
    await AsyncStorage.getItem('ACCESS_TOKEN').then((value) => {
      !value && this.props.generateToken();
    });
  }
  async onSubmit() {
    this.props.data && console.log('in submit ', this.props);
    const data = this.props.data;

    AsyncStorage.setItem('ACCESS_TOKEN', data && data.access_token);
    AsyncStorage.setItem('REFRESH_TOKEN', data && data.refresh_token);

    this.props.login(this.state.phone, data && data.access_token);
    if (data && data.err === 401) {
      this.props.refreshToken();
    } else {
      this.props.navigation.navigate('MainRoot');
    }
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
  console.log('State', state.apiReducer.user_data);
  return {
    data: state.apiReducer.user_data,
  };
};
export default connect(mapStateToProps, {generateToken, login, refreshToken})(
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
