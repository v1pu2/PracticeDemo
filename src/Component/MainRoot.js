import React from 'react';
import {Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import Dashboard from '../Component/Dashboard';
import Profile from '../Component/Profile';
const initialLayout = {width: Dimensions.get('window').width};

function MainRoot(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dashboard', title: 'Dashboard'},
    {key: 'profile', title: 'Profile'},
  ]);
  console.log('props in mainRoot', props);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={({route}) => {
        switch (route.key) {
          case 'dashboard':
            return <Dashboard navigation={props.navigation} />;
          case 'profile':
            return <Profile navigation={props.navigation} />;
          default:
            return <Dashboard navigation={props.navigation} />;
        }
      }}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

export default MainRoot;
