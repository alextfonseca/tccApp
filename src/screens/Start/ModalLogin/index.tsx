import React from 'react'

import GoogleIcon from 'react-native-vector-icons/AntDesign'
import FacebookIcon from 'react-native-vector-icons/EvilIcons'

import {
  Container,
  Content,
  FacebookButton,
  FacebookButtonText,
  GoogleButton,
  GoogleButtonText,
  Title
} from './styles'

export function ModalLogin() {
  return (
    <Container>
      <Title>
        Seja bem vindo ao app, escolha sua rede favorita e faça login!
      </Title>

      <Content>
        <FacebookButton>
          <FacebookIcon name="sc-facebook" size={30} color={'#2A6100'} />
          <FacebookButtonText>ENTRE COM O FACEBOOK</FacebookButtonText>
        </FacebookButton>

        <GoogleButton>
          <GoogleIcon name="google" size={25} color={'#fff'} />
          <GoogleButtonText>ENTRE COM O GOOGLE</GoogleButtonText>
        </GoogleButton>
      </Content>
    </Container>
  )
}
