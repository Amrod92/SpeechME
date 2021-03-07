import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from './screens/OnboardingScreen';
import Homepage from './screens/Homepage';
import Texts from './screens/Texts';

const HomeStack = createStackNavigator();
const TextsStack = createStackNavigator();
const OnboardingStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const OnboardingStackScreen = () => (
  <OnboardingStack.Navigator>
          <OnboardingStack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}/>
  </OnboardingStack.Navigator>
);
const HomeStackScreen = () => (
  <HomeStack.Navigator>
          <HomeStack.Screen name="SpeechMe" component={Homepage} options={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#2a46ff',
              fontFamily: 'Montserrat',
              fontWeight: "bold",
              fontSize: 18
            },
            headerStyle: {
              shadowColor: '#f4f6ff',
              elevation: 0
            }
           }}/>
  </HomeStack.Navigator>
);
const TextsStackScreen = () => (
  <TextsStack.Navigator>
          <TextsStack.Screen name="Texts" component={Texts} options={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#2a46ff',
              fontFamily: 'Montserrat',
              fontWeight: "bold",
              fontSize: 18
            },
            headerStyle: {
              shadowColor: '#f4f6ff',
              elevation: 0
            }
           }}/>
  </TextsStack.Navigator>
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
        <Tab.Navigator>
          <Tab.Screen 
          name="Homepage" 
          component={HomeStackScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={26} color="#f4f6ff" />
            ),
          }}/>
          <Tab.Screen 
            name="Texts"
            component={TextsStackScreen}
            options={{
              tabBarLabel: 'Texts',
              tabBarIcon: ({ color }) => (
                <Icon name="file-word" size={26} color="#f4f6ff" />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
      </>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen 
          name="Homepage" 
          component={HomeStackScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={26} color="#f4f6ff" />
            ),
          }}/>
          <Tab.Screen 
            name="Texts"
            component={TextsStackScreen}
            options={{
              tabBarLabel: 'Texts',
              tabBarIcon: ({ color }) => (
                <Icon name="file" size={26} color="#f4f6ff" />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
