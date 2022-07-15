import React from 'react'
import { Header } from '../../components/Header'

import { ListCard } from './components/ListCard'

import {
  Container,
  ContainerSelectButton,
  Content,
  OptionButton,
  OptionButtonText,
  Title
} from './styles'

export function Home() {
  return (
    <Container>
      <Content>
        <Header />

        <Title>Olá Alex, tenha um bom dia</Title>

        <ContainerSelectButton>
          <OptionButton>
            <OptionButtonText>Em alta</OptionButtonText>
          </OptionButton>

          <OptionButton style={{ backgroundColor: '#2A6100' }}>
            <OptionButtonText>Recente</OptionButtonText>
          </OptionButton>
        </ContainerSelectButton>

        <ListCard title={'Princiais parques públicos'} />
        <ListCard title={'Princiais parques privados'} />
        <ListCard title={'Guias de Turismo'} />
      </Content>
    </Container>
  )
}
