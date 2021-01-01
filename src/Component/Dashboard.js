import React, {useState} from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const SliderView = (props) => {
  const {title, value} = props;
  const [sliderValue, setSliderValue] = useState(value);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>Value {sliderValue}</Text>
      <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        step={1}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
        style={styles.slider}
      />
      <Button
        title="Button"
        onPress={() => Alert.alert(`Slider Value is ${sliderValue}`)}
      />
    </View>
  );
};

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SliderView title={'Slider 1'} value={0} />
        <SliderView title={'Slider 2'} value={0} />
        <SliderView title={'Slider 3'} value={0} />
      </View>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  count: {
    color: '#ababab',
    marginTop: 10,
  },
  button: {
    width: 100,
  },
  container: {
    margin: 10,
  },
  slider: {height: 50},
});
