import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: #eee;
  border-radius: 4px;
  align-items: center;
  margin-bottom: 15px;
`;

export const EnterprisePhoto = styled.Image`
  align-self: stretch;
  align-items: center;
  height: 250px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
export const Infos = styled.View`
  align-self: stretch;
`;
export const Name = styled.Text`
  background-color: rgba(2, 2, 2, 0.7);
  padding: 5px 0px;
  color: #fff;
  text-align: center;
  font-size: 29px;
  line-height: 32px;
  font-weight: bold;
`;
export const Dada = styled.View`
  background-color: #fff;
  padding: 10px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const Local = styled.Text`
  font-size: 21px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Type = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TypeName = styled.Text`
  font-size: 16px;
  line-height: 19px;
`;
export const AboutMore = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #e51f6b;
  font-weight: bold;
`;
