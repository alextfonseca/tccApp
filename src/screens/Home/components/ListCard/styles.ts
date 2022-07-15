import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 30px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray};

  font-size: ${RFPercentage(2.2)}px;
  font-family: ${({ theme }) => theme.fonts.light};
`
