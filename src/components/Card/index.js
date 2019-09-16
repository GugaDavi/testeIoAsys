import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  EnterprisePhoto,
  Infos,
  Name,
  Dada,
  Local,
  Type,
  TypeName,
  AboutMore,
  TextButton,
} from './styles';

export default function Card({
  photo,
  enterpriseName,
  city,
  country,
  segment,
  onPress,
}) {
  return (
    <Container>
      {photo && (
        <EnterprisePhoto
          source={{ uri: `http://empresas.ioasys.com.br${photo}` }}
        />
      )}
      <Infos>
        <Name>{enterpriseName}</Name>
        <Dada>
          <Local>
            {city}, {country}
          </Local>
          <Type>
            <TypeName>Segmento: {segment}</TypeName>
            <AboutMore onPress={onPress}>
              <TextButton>VER MAIS</TextButton>
            </AboutMore>
          </Type>
        </Dada>
      </Infos>
    </Container>
  );
}

Card.propTypes = {
  photo: PropTypes.string,
  enterpriseName: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  segment: PropTypes.string,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  photo: null,
  enterpriseName: null,
  city: null,
  country: null,
  segment: null,
  onPress: null,
};
