import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      code: '+91',
    };
  }
  onSubmit() {
    console.log('onsubmit');
    this.props.navigation.navigate('MainRoot');
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
        <Button title="submit" onPress={() => this.onSubmit()} />
      </SafeAreaView>
    );
  }
}
export default App;
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
