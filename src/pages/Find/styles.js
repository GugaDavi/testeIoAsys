import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  padding: 0px 30px;
  position: relative;
`;
export const Title = styled.Text`
  text-align: center;
  margin: 30px 0px;
  font-size: 27px;
  line-height: 29px;
  font-weight: bold;
`;
export const Picker = styled.Picker.attrs({
  style: {
    alignSelf: 'stretch',
  },
})`
  background-color: rgba(255, 255, 255, 0.9);
`;
export const Name = styled(Input)`
  margin-top: 10px;
`;
export const SubmitButton = styled(Button)`
  margin: 30px 0px;
`;
