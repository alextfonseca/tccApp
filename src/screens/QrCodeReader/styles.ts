import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;

  padding: 0 20px;

  justify-content: space-between;
`

export const ModalQrCodeScanner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  background: #fff;

  padding: 0 20px;
`

export const QrCodeScannerContainer = styled.View`
  align-items: center;
`

export const QrCodeScannerText = styled.Text`
  font-size: ${RFPercentage(2.5)}px;

  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Button = styled.TouchableOpacity`
  margin-bottom: 20px;

  width: 100%;

  align-items: center;

  padding: 14px;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.green100};
`

export const CancelButton = styled(Button)`
  background: ${({ theme }) => theme.colors.caution};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: ${RFPercentage(2)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`
