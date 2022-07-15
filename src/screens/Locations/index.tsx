import React from 'react'
import { Header } from '../../components/Header'

import { Container, Content } from '../Home/styles'

import ImageCardBackground from '../../assets/startImageBackground.png'
import {
  ContainerCard,
  ContentCard,
  Image,
  Local,
  NameLocal,
  OptionsButton,
  OptionsContainer
} from './styles'
import CoffeeIcon from 'react-native-vector-icons/Feather'
// eslint-disable-next-line import/no-duplicates
import CampingIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// eslint-disable-next-line import/no-duplicates
import SleepIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import HotelIcon from 'react-native-vector-icons/MaterialIcons'

export function Locations() {
  return (
    <Container>
      <Content>
        <Header />

        <OptionsContainer>
          <OptionsButton>
            <CampingIcon name="campfire" size={30} color="#fff" />
          </OptionsButton>

          <OptionsButton>
            <HotelIcon name="hotel" size={30} color="#fff" />
          </OptionsButton>

          <OptionsButton>
            <CoffeeIcon name="coffee" size={30} color="#fff" />
          </OptionsButton>

          <OptionsButton>
            <SleepIcon name="sleep" size={30} color="#fff" />
          </OptionsButton>
        </OptionsContainer>

        <ContainerCard>
          <Image source={ImageCardBackground} />

          <ContentCard>
            <NameLocal>Cachoeira</NameLocal>
            <Local>São Roque </Local>
          </ContentCard>
        </ContainerCard>

        <ContainerCard>
          <Image source={ImageCardBackground} />

          <ContentCard>
            <NameLocal>Cachoeira</NameLocal>
            <Local>São Roque </Local>
          </ContentCard>
        </ContainerCard>

        <ContainerCard>
          <Image source={ImageCardBackground} />

          <ContentCard>
            <NameLocal>Cachoeira</NameLocal>
            <Local>São Roque </Local>
          </ContentCard>
        </ContainerCard>

        <ContainerCard>
          <Image source={ImageCardBackground} />

          <ContentCard>
            <NameLocal>Cachoeira</NameLocal>
            <Local>São Roque </Local>
          </ContentCard>
        </ContainerCard>
      </Content>
    </Container>
  )
}
