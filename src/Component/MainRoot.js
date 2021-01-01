import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Dashboard from '../Component/Dashboard';
import Profile from '../Component/Profile';
const initialLayout = {width: Dimensions.get('window').width};
function MainRoot() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dashboard', title: 'Dashboard'},
    {key: 'profile', title: 'Profile'},
  ]);
  const renderScene = SceneMap({
    dashboard: Dashboard,
    profile: Profile,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

export default MainRoot;
