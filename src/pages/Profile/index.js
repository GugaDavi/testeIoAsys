import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  Name,
  Email,
  Local,
  Balance,
  Avatar,
  AllBalance,
  SignOut,
} from './styles';

import Background from '../../components/Background';
import NoEnterprises from '../../components/NoEnterprises';

import { signOut } from '../../store/modules/auth/actions';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);

  function handleSingOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <ScrollView>
        <Container>
          <Image />
          <Avatar
            source={{
              uri: 'https://api.adorable.io/avatars/100/abott@adorable.png',
            }}
          />
          <Name>{profile.investor_name}</Name>
          <Email>{profile.email}</Email>
          <Local>
            {profile.city}, {profile.country}
          </Local>
          <Balance>Saldo Disponivel: {profile.balanceFormatted}</Balance>
          <NoEnterprises />
          <AllBalance>
            Na Carteira: {profile.portfolioValueFormatted}
          </AllBalance>
          <SignOut onPress={handleSingOut}>Sair</SignOut>
        </Container>
      </ScrollView>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-balance-wallet" size={20} color={tintColor} />
  ),
};
