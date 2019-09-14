import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

import Background from '../../components/Background';

export default function Find() {
  return <Background />;
}

Find.navigationOptions = {
  tabBarLabel: 'Consultar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};
