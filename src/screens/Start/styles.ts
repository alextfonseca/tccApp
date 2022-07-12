import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  height: 100%;
  width: 100%;

  align-items: center;

  justify-content: space-evenly;
`

export const ContainerCarousel = styled.View`
  align-items: center;
  justify-content: center;

  height: 100%;
`

export const ContentCarousel = styled.View`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);

  height: 60%;
`
export const TitleCarousel = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  margin-top: 10px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFPercentage(3.5)}px;
`

export const DescriptionCarousel = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  margin-top: 5px;

  font-family: ${({ theme }) => theme.fonts.extraLight};
  font-size: ${RFPercentage(2.5)}px;
`

export const ContainerImage = styled.Image`
  height: 350px;
  width: 100%;
  border-radius: 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFPercentage(4.5)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-top: 30px;

  width: 40%;
`

export const SpanTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.green100};
`

export const Button = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(300.5px);
  -webkit-backdrop-filter: blur(300.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  padding: 15px;

  width: 90%;

  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFPercentage(2.5)}px;
`
