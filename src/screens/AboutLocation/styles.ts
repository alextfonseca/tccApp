import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  height: 100%;
  width: 100%;
`

export const Content = styled.View`
  width: 100%;

  min-height: 150px;

  padding: 20px;

  position: absolute;
  bottom: 0;

  background: rgba(255, 255, 255, 0.5);

  justify-content: space-between;
  align-items: center;

  flex-direction: row;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.green200};

  font-size: ${RFPercentage(4)}px;

  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Local = styled.Text`
  color: ${({ theme }) => theme.colors.green200};

  font-size: ${RFPercentage(2)}px;

  font-family: ${({ theme }) => theme.fonts.medium};
`

export const CloseButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.green200};

  position: absolute;
  top: 60px;

  left: 20px;

  padding: 10px;

  border-radius: 10px;
`

export const OpenModalButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.green200};

  padding: 10px;

  border-radius: 10px;
`

// modal sobre o local
export const CloseModalButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.green200};

  padding: 10px;

  border-radius: 10px;
`
export const AboutLocalModal = styled.View`
  height: 100%;
  width: 100%;
`

export const HeaderModal = styled.View`
  width: 100%;

  min-height: 150px;

  padding: 20px;

  background: rgba(255, 255, 255, 0.7);

  justify-content: space-between;
  align-items: center;

  flex-direction: row;
`

export const ContentModal = styled.View`
  background: #fff;

  height: 100%;

  border-radius: 15px;

  padding: 20px;
`

export const HistoryTitle = styled(Title)``

export const AboutText = styled.Text`
  margin-top: 10px;

  font-size: ${RFPercentage(2)}px;
  line-height: ${RFPercentage(3)}px;

  font-family: ${({ theme }) => theme.fonts.light};

  margin-bottom: 10px;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.colors.green200};

  padding: 10px;

  align-items: center;

  border-radius: 5px;

  margin-top: 13px;
`

export const ButtonText = styled.Text`
  font-size: ${RFPercentage(2.2)}px;

  font-family: ${({ theme }) => theme.fonts.light};
`

export const WhatsAppButton = styled(Button)`
  background: transparent;

  border: 1px solid ${({ theme }) => theme.colors.green200};
`

export const WhatsAppButtonText = styled(ButtonText)``

export const ReserveButton = styled(Button)``
export const ReserveButtonText = styled(ButtonText)`
  color: ${({ theme }) => theme.colors.white};
`

export const AttentionText = styled.Text`
  margin-top: 10px;

  font-size: ${RFPercentage(1.8)}px;
  font-family: ${({ theme }) => theme.fonts.light};

  color: ${({ theme }) => theme.colors.gray};
`
