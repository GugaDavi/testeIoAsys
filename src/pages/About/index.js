import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Name,
  Photo,
  Description,
  Infos,
  Info,
  SocialMedia,
  Media,
  TextMedia,
  Values,
  Shares,
  SharePrice,
  Locale,
  Segment,
} from './styles';

import Background from '../../components/Background';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function About({ navigation }) {
  const id = navigation.getParam('enterpriseId');
  const [enterpriseInfo, setEnterpriseInfos] = useState(null);

  useEffect(() => {
    async function loadInfos(id) {
      const response = await api.get(`/api/v1/enterprises/${id}`);

      const { enterprise } = response.data;

      enterprise.sharePriceFormatted = formatPrice(enterprise.share_price);

      setEnterpriseInfos(enterprise);
    }
    loadInfos(id);
  }, []);

  return (
    <Background>
      {enterpriseInfo ? (
        <ScrollView>
          <Container>
            <Name>{enterpriseInfo.enterprise_name}</Name>
            {enterpriseInfo.photo && (
              <Photo
                source={{
                  uri: `http://empresas.ioasys.com.br${enterpriseInfo.photo}`,
                }}
              />
            )}
            <Description>{enterpriseInfo.description}</Description>
            <Infos>
              <Info>
                Email:{' '}
                {enterpriseInfo.email_enterprise
                  ? enterpriseInfo.email_enterprise
                  : 'Não Cadastrado'}
              </Info>
              <Info>
                Fone:{' '}
                {enterpriseInfo.phone ? enterpriseInfo.phone : 'Não cadastrado'}
              </Info>
              <SocialMedia>
                <Media>
                  <Icon
                    name="facebook-box"
                    color="rgba(2, 2, 2, 0.7)"
                    size={30}
                    style={{ marginRight: 5 }}
                  />
                  <TextMedia>
                    Facebook:{' '}
                    {enterpriseInfo.facebook
                      ? enterpriseInfo.facebook
                      : 'Não cadastrado'}
                  </TextMedia>
                </Media>
                <Media>
                  <Icon
                    name="twitter-box"
                    color="rgba(2, 2, 2, 0.7)"
                    size={30}
                    style={{ marginRight: 5 }}
                  />
                  <TextMedia>
                    Twitter:{' '}
                    {enterpriseInfo.twitter
                      ? enterpriseInfo.twitter
                      : 'Não cadastrado'}
                  </TextMedia>
                </Media>
                <Media>
                  <Icon
                    name="linkedin-box"
                    color="rgba(2, 2, 2, 0.7)"
                    size={30}
                    style={{ marginRight: 5 }}
                  />
                  <TextMedia>
                    LinkedIn:{' '}
                    {enterpriseInfo.linkedin
                      ? enterpriseInfo.linkedin
                      : 'Não cadastrado'}
                  </TextMedia>
                </Media>
              </SocialMedia>
              <Values>
                <Shares>Procuras: {enterpriseInfo.shares}</Shares>
                <SharePrice>
                  Preço: {enterpriseInfo.sharePriceFormatted}
                </SharePrice>
              </Values>
              <Locale>
                {enterpriseInfo.city}, {enterpriseInfo.country}
              </Locale>
              <Segment>
                Segmento: {enterpriseInfo.enterprise_type.enterprise_type_name}
              </Segment>
            </Infos>
          </Container>
        </ScrollView>
      ) : null}
    </Background>
  );
}

About.propTypes = {
  navigation: PropTypes.objectOf([PropTypes.object, PropTypes.array]).isRequired,
};
