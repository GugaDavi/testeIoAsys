import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, EnterpriseList, Title } from './styles';

import Background from '../../components/Background';
import EnterpriseCard from '../../components/Card';

export default function Dashboard({ navigation }) {
  const enterprises = useSelector(state => state.enterprise.enterprises);
  const loading = useSelector(state => state.enterprise.loading);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(9);
  const [enterpriseGroup, setEnterpriseGroup] = useState([]);

  function rangeEnterprises() {
    const range = enterprises.filter((item, index) => {
      if (index >= rangeMin && index <= rangeMax) return item;
    });
    setEnterpriseGroup([...enterpriseGroup, ...range]);
  }

  useEffect(() => {
    if (enterprises) {
      rangeEnterprises();
    }
  }, [enterprises]);

  function handleAbout(enterpriseId) {
    navigation.navigate('About', { enterpriseId });
  }

  return (
    <Background>
      <Container>
        <Title>Empresas</Title>
        {loading ? (
          <ActivityIndicator size="large" color="#e51f6b" />
        ) : (
          <EnterpriseList
            data={enterpriseGroup}
            keyExtractor={enterprise => String(enterprise.id)}
            renderItem={({ item }) => (
              <EnterpriseCard
                photo={item.photo}
                enterpriseName={item.enterprise_name}
                city={item.city}
                country={item.country}
                segment={item.enterprise_type.enterprise_type_name}
                onPress={() => handleAbout(item.id)}
              />
            )}
          />
        )}
      </Container>
    </Background>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};
