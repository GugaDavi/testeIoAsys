import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0px 20px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(2, 2, 2, 0.3)',
})`
  flex: 1;
  font-size: 18px;
  line-height: 21px;
  margin-left: 10px;
  color: rgba(2, 2, 2, 0.9);
`;
