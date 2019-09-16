import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Find from './pages/Find/index';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createAppContainer(
      createSwitchNavigator(
        {
          Sign: createSwitchNavigator({
            SignIn,
            SignUp,
          }),
          App: createBottomTabNavigator(
            {
              Dashboard: {
                screen: createStackNavigator(
                  {
                    Dashboard,
                    About,
                  },
                  {
                    defaultNavigationOptions: {
                      headerTransparent: true,
                      headerTintColor: 'rgba(2, 2, 2, 0.7)',
                      headerLeftContainerStyle: {
                        marginLeft: 10,
                      },
                    },
                  }
                ),
                navigationOptions: {
                  tabBarLabel: 'Empresas',
                  tabBarIcon: (
                    <Icon
                      name="apps"
                      size={20}
                      color="rgba(255, 255, 255, 0.6)"
                    />
                  ),
                },
              },
              Find,
              Profile,
            },
            {
              tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                style: {
                  backgroundColor: '#b71553',
                },
                labelStyle: {
                  fontSize: 14,
                },
              },
            }
          ),
        },
        {
          initialRouteName: isSigned ? 'App' : 'Sign',
        }
      )
    )
  );
