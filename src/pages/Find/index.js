import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container, Title, Picker, Name, SubmitButton } from './styles';

import Background from '../../components/Background';
import EnterpriseCard from '../../components/Card';

export default function Find({ navigation }) {
  const segments = useSelector(state => state.segment.segment);

  const [segment, setSegment] = useState(null);
  const [name, setName] = useState('');
  const [enterprise, setEnterprise] = useState(null);

  async function handleFind() {
    if (!segment) {
      Alert.alert('Erro', 'Gentileza selecione um segmento');
    }

    try {
      const response = await api.get(
        `/api/v1/enterprises?enterprise_types=${segment}&name=${name}`
      );

      if (response.data.enterprises[0].id === undefined) {
        return Alert.alert('Dados não encontrados', 'Tente novamente');
      }

      const { enterprises } = response.data;

      setEnterprise(...enterprises);
      setName('');
    } catch (error) {
      Alert.alert('Dados não encontrados', 'Tente novamente');
    }
  }

  function handleAbout(enterpriseId) {
    navigation.navigate('About', { enterpriseId });
    setEnterprise(null);
  }

  return (
    <Background>
      <ScrollView>
        <Container>
          <Title>Buscar Empresa</Title>
          <Picker
            selectedValue={segment}
            onValueChange={itemValue => setSegment(itemValue)}
          >
            <Picker.Item label="Selecione a categoria" value={null} />
            {segments
              ? segments.map(item => (
                  <Picker.Item
                    label={item.enterprise_type_name}
                    value={item.id}
                  />
                ))
              : null}
          </Picker>
          <Name
            icon="store"
            placeholder="Nome da empresa"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={setName}
          />
          <SubmitButton onPress={handleFind}>Pesquisar</SubmitButton>

          {enterprise ? (
            <EnterpriseCard
              photo={enterprise.photo}
              enterpriseName={enterprise.enterprise_name}
              city={enterprise.city}
              country={enterprise.country}
              segment={enterprise.enterprise_type.enterprise_type_name}
              onPress={() => handleAbout(enterprise.id)}
            />
          ) : null}
        </Container>
      </ScrollView>
    </Background>
  );
}

Find.navigationOptions = {
  tabBarLabel: 'Consultar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};

Find.propTypes = {
  navigation: PropTypes.objectOf([PropTypes.object, PropTypes.array])
    .isRequired,
};
