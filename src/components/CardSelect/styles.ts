import typography from '../../config/typography';
import colors from '../../config/colors';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  padding: 24px;
  border-radius: 10px;
  background: ${({bgColor}) => bgColor};
  width: 44%;
  margin: 6px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({small}) => (small ? 14 : 20)}px;
  font-family: ${typography.bold};
  color: ${colors.white};
  text-align: center;
  margin: 0 0 32px 0;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 100px;
  width: 100px;
`;
