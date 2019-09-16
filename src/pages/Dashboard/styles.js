import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0px 30px;
  text-align: center;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 30px 0px;
  font-size: 27px;
  line-height: 29px;
  font-weight: bold;
`;

export const EnterpriseList = styled.FlatList.attrs({
  showVerticalScollIndicator: false,
})`
  margin-bottom: 90px;
`;
