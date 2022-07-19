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

import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../routes/stack/models/types'

export function ImageCard() {
  const data = {
    local: 'Cachoeira',
    city: 'São Roque ',
    image: 'https://i.ibb.co/8XYLwbM/start-Image-Background.png'
  }

  const navigation = useNavigation<propsStack>()

  return (
    <Container>
      <ContainerCard
        onPress={() => navigation.navigate('AboutLocation', { data })}
      >
        <Image
          source={{
            uri: 'https://i.ibb.co/8XYLwbM/start-Image-Background.png'
          }}
        />

        <ContentCard>
          <NameLocal>
            Cachoeira <Icon name="check-circle" size={10} color="#00A6DA" />
          </NameLocal>
          <Local>São Roque </Local>
        </ContentCard>
      </ContainerCard>

      <ContainerCard
        onPress={() => navigation.navigate('AboutLocation', { data })}
      >
        <Image
          source={{
            uri: 'https://i.ibb.co/8XYLwbM/start-Image-Background.png'
          }}
        />

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
