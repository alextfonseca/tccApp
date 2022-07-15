import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
`

export const Content = styled.ScrollView`
  width: 70%;

  padding: 0 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFPercentage(4)}px;
  font-family: ${({ theme }) => theme.fonts.light};

  margin-top: 45px;
`

export const ContainerSelectButton = styled.View`
  flex-direction: row;
`

export const OptionButton = styled.TouchableOpacity`
  margin-left: 16px;

  background: ${({ theme }) => theme.colors.green};

  border-radius: 300px;

  padding: 10px 20px;

  margin-top: 16px;
`

export const OptionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.light};

  font-size: ${RFPercentage(2)}px;
`
