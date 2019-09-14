import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const InfoText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 21px;
  line-height: 23px;
  color: rgba(2, 2, 2, 0.9);
  margin-top: 20px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  font-size: 16px;
`;
