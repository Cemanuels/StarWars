import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.ScrollView``

export const Logo = styled.Image`
  align-self: center;
  height: 36px;
  width: 80px;
  margin: 0 0 10px 0;
`;

export const Wrap = styled.View.attrs({
  marginHorizontal: -16
})`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center
`;

export const ButtonBack = styled.TouchableOpacity``;
