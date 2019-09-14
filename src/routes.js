import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
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
              Dashboard,
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
