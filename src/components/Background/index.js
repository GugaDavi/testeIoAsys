import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#fff', '#e51f6b'],
})`
  flex: 1;
  color: rgba(2, 2, 2, 0.7);
`;
