import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OnboardingScreen from './screens/OnboardingScreen';
import Homepage from './screens/Homepage';
import Texts from './screens/Texts';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenoptions = {{ 
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
     }}>
    <HomeStack.Screen
      name="SpeechMe"
      component={Homepage}
      options={{
        title: "SpeechMe"
      }}/>
    </HomeStack.Navigator>
  );

const App: () => React$Node = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    return (
      <>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}/>
          <HomeStack.Screen name="Homepage" component={HomeStackScreen} />
        </HomeStack.Navigator>    
      </NavigationContainer>
      </>
    );
  } else {
    return <Homepage />;
  }
};

export default App;
