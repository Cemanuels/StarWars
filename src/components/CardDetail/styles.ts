import typography from '../../config/typography';
import colors from '../../config/colors';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  border-radius: 10px;
  background: ${({bgColor}) => bgColor};
  width: 48%;
  margin: 4px;
  justify-content: space-between;
  height: 180px;
`;

export const AlignHorizontal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.View`
  height: 70px;
  width: 70px;
  background: ${colors.darkGray};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 80px;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${typography.bold};
  color: blanchedalmond;
  text-align: right;
  margin: 24px 20px 0 -20px;
  width: 96px;
`;

export const Description = styled.Text`
  font-size: ${({small}) => (small ? 20 : 22)}px;
  font-family: ${typography.bold};
  color: blanchedalmond;
  text-align: left;
  margin: 10px 24px 24px 24px;
  text-transform: capitalize;
  max-height: 90px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 100px;
  width: 100px;
`;
