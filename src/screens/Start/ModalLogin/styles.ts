import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  position: absolute;
  background: rgba(0, 0, 0, 0.9);

  width: 100%;
  height: 100%;

  align-items: center;

  justify-content: space-evenly;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 60px;

  font-size: ${RFPercentage(4)}px;
  font-weight: bold;

  width: 90%;
`

export const Content = styled.View`
  width: 100%;

  align-items: center;
`

export const Button = styled.TouchableOpacity`
  width: 90%;

  align-items: center;

  padding: 14px;

  border-radius: 10px;

  flex-direction: row;
`

export const ButtonText = styled.Text`
  font-size: ${RFPercentage(2)}px;

  margin-left: 22%;
`

export const FacebookButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
`

export const GoogleButton = styled(Button)`
  background: ${({ theme }) => theme.colors.green200};

  margin-top: 15px;
`

export const FacebookButtonText = styled(ButtonText)`
  color: ${({ theme }) => theme.colors.green200};
`

export const GoogleButtonText = styled(ButtonText)`
  color: ${({ theme }) => theme.colors.white};
`
