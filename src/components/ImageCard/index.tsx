import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  ContainerCard,
  ContentCard,
  Image,
  Local,
  NameLocal
} from './styles'

import ImageCardBackground from '../../assets/startImageBackground.png'

export function ImageCard() {
  return (
    <Container>
      <ContainerCard>
        <Image source={ImageCardBackground} />

        <ContentCard>
          <NameLocal>
            Cachoeira <Icon name="check-circle" size={10} color="#00A6DA" />
          </NameLocal>
          <Local>São Roque </Local>
        </ContentCard>
      </ContainerCard>

      <ContainerCard>
        <Image source={ImageCardBackground} />

        <ContentCard>
          <NameLocal>
            Cachoeira <Icon name="check-circle" size={10} color="#00A6DA" />
          </NameLocal>
          <Local>São Roque </Local>
        </ContentCard>
      </ContainerCard>
    </Container>
  )
}
