import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';

export default function NoEnterprises() {
  return (
    <Container>
      <Icon
        name="remove-shopping-cart"
        size={50}
        color="rgba(2, 2, 2, 0.7)"
        style={{ marginBottom: 10 }}
      />
      <Text>Sem Investimentos</Text>
    </Container>
  );
}
