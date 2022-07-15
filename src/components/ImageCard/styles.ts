import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Image = styled.Image`
  height: 250px;
  width: 100%;

  flex: 1;
  border-radius: 10px;
`

export const ContainerCard = styled.TouchableOpacity`
  height: 250px;

  flex: 1;

  margin: 8px;

  border-radius: 10px;

  position: relative;
`

export const ContentCard = styled.View`
  position: absolute;

  width: 100%;

  bottom: 0;

  background: rgba(255, 255, 255, 0.3);

  align-items: center;

  padding: 8px 0;
`

export const NameLocal = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: ${RFPercentage(2)}px;

  font-family: ${({ theme }) => theme.fonts.regular};

  align-items: center;
`

export const Local = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: ${RFPercentage(1.8)}px;
  font-family: ${({ theme }) => theme.fonts.light};
`
