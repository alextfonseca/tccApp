import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import imageBackground from '../../assets/startImageBackground.png'
import { ModalLogin } from './ModalLogin'

import {
  Button,
  ButtonText,
  Container,
  ContainerCarousel,
  ContainerImage,
  ContentCarousel,
  DescriptionCarousel,
  SpanTitle,
  Title,
  TitleCarousel
} from './styles'

const sliderWidth = Dimensions.get('window').width
const itemWidth = sliderWidth * 0.88

const carouselItems = [
  {
    imgUrl:
      'https://tribunapr.uol.com.br/wp-content/uploads/2021/08/01145834/morro-do-canal-970x550.jpg',
    title: 'Local 1',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    imgUrl:
      'https://tribunapr.uol.com.br/wp-content/uploads/2021/08/01145834/morro-do-canal-970x550.jpg',
    title: 'Local 2',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    imgUrl:
      'https://tribunapr.uol.com.br/wp-content/uploads/2021/08/01145834/morro-do-canal-970x550.jpg',
    title: 'Local 3',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing'
  }
]

interface carouselItemProps {
  item: {
    imgUrl: string
    title: string
    description: string
  }
  index: number
}

function carouselItem({ item, index }: carouselItemProps) {
  return (
    <ContainerCarousel key={index}>
      <ContainerImage source={{ uri: item.imgUrl }} />
      <TitleCarousel>{item.title}</TitleCarousel>
      <DescriptionCarousel>{item.description}</DescriptionCarousel>
    </ContainerCarousel>
  )
}

export function Start() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  function handleShowLoginModal() {
    setShowLoginModal(!showLoginModal)
  }

  return (
    <>
      <Container source={imageBackground} resizeMode="cover">
        <Title>
          View contact e <SpanTitle>GO</SpanTitle>
        </Title>

        <ContentCarousel>
          <Carousel
            data={carouselItems}
            renderItem={carouselItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            useScrollView={true}
          />
        </ContentCarousel>

        <Button onPress={handleShowLoginModal}>
          <ButtonText>Entrar no app</ButtonText>
        </Button>
      </Container>

      {showLoginModal && <ModalLogin />}
    </>
  )
}
