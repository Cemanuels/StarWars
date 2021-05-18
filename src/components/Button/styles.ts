import colors from '../../config/colors';
import typography from '../../config/typography';
import styled from 'styled-components/native';

interface ButtonPrimaryProps {
  backgroundColor: string;
}

export const ButtonPrimary = styled.TouchableOpacity<ButtonPrimaryProps>`
  background: ${({backgroundColor}) => backgroundColor};
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${typography.bold};
  color: ${colors.primary};
`;
