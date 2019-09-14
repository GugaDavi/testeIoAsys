import styled from 'styled-components/native';

import logo from '../../assets/logo_ioasys.png';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Image = styled.Image.attrs({
  source: logo,
})``;
export const Name = styled.Text`
  font-size: 36px;
  line-height: 39px;
  font-weight: bold;
`;
export const Email = styled.Text`
  font-size: 24px;
  line-height: 27px;
`;
export const Local = styled.Text`
  font-size: 24px;
  line-height: 27px;
  margin-bottom: 20px;
`;
export const Balance = styled.Text`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;
`;
export const Avatar = styled.Image`
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const AllBalance = styled.Text`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;
`;

export const SignOut = styled(Button)`
  align-self: stretch;
  margin-bottom: 20px;
`;
