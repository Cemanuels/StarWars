import typography from '../../config/typography';
import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Center = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image`
  align-self: center;
  height: 70px;
  width: 150px;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: ${typography.regular};
  color: blanchedalmond;
  text-align: center;
  margin: 24px 0;
`;
