import colors from '../../config/colors';
import styled from 'styled-components/native';
import typography from '../../config/typography';
import { Dimensions } from 'react-native';

export const Card = styled.TouchableOpacity`
  padding: 24px;
  border-radius: 10px;
  background: ${colors.darkBlue};
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const Right = styled.View`
  margin: 0 0 0 10px;
`;

export const Image = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const TextImage = styled.Text`
  font-size: 30px;
  font-family: ${typography.regular};
  color: blanchedalmond;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${typography.bold};
  color: ${colors.white};
  width: ${Dimensions.get('window').width/1.8}
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: ${typography.light};
  color: ${colors.white};
  width: ${Dimensions.get('window').width/1.8}
`;
