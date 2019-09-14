import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

import Background from '../../components/Background';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Empresas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="apps" size={20} color={tintColor} />
  ),
};
