import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, InfoText, SignLink, SignLinkText } from './styles';

import Background from '../../components/Background';

import logo from '../../assets/logo_ioasys.png';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Icon name="do-not-disturb" size={100} color="rgba(2, 2, 2, 0.7)" />
        <InfoText>
          Desculpas, ainda não estamos aceitando novas contas.
        </InfoText>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
