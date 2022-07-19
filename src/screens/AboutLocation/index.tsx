import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { propsStack } from '../../routes/tab/models/types'

import Icon from 'react-native-vector-icons/Feather'

import {
  AboutLocalModal,
  AboutText,
  AttentionText,
  ButtonText,
  CloseButton,
  CloseModalButton,
  Container,
  Content,
  ContentModal,
  HeaderModal,
  HistoryTitle,
  Local,
  OpenModalButton,
  ReserveButton,
  ReserveButtonText,
  Title,
  WhatsAppButton,
  WhatsAppButtonText
} from './styles'
import { Text, TouchableOpacity, View } from 'react-native'

import Modal from 'react-native-modal'

export function AboutLocation({ route }: any) {
  const [showModal, setShowModal] = useState(false)

  const navigation = useNavigation<propsStack>()

  if (!route.params.data) {
    navigation.navigate('Home')
  }
  const data = route.params.data

  return (
    <Container source={{ uri: data.image }} resizeMode="cover">
      <CloseButton onPress={() => navigation.navigate('Home')}>
        <Icon name="x" size={30} color="#fff" />
      </CloseButton>

      <Content>
        <View>
          <Title>{data.local}</Title>

          <Local>{data.city}</Local>
        </View>
        <OpenModalButton onPress={() => setShowModal(!showModal)}>
          <Icon name="plus" size={30} color="#fff" />
        </OpenModalButton>
      </Content>

      {/* modal mostrando informações do local */}

      <Modal
        isVisible={showModal}
        style={{
          justifyContent: 'flex-end',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          margin: 0
        }}
      >
        <AboutLocalModal>
          <HeaderModal>
            <View>
              <Title>{data.local}</Title>

              <Local>{data.city}</Local>
            </View>
            <CloseModalButton onPress={() => setShowModal(!showModal)}>
              <Icon name="minus" size={30} color="#fff" />
            </CloseModalButton>
          </HeaderModal>

          <ContentModal>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <HistoryTitle>História</HistoryTitle>

              <TouchableOpacity>
                <Icon name="heart" size={25} color="#2A6100" />
              </TouchableOpacity>
            </View>

            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              vitae amet mattis mattis. Consectetur et mattis imperdiet interdum
              id enim ultrices. Velit, dictum sed et ridiculus urna diam dictum.
              Semper lacus in risus vel risus. Faucibus leo habitant nulla augue
              tellus in sed quis. Nullam lacus sed senectus maecenas nisl eget
              mauris. Blandit scelerisque enim sem nulla mi habitasse leo
            </AboutText>

            <WhatsAppButton>
              <WhatsAppButtonText>WhatsApp</WhatsAppButtonText>
            </WhatsAppButton>

            <ReserveButton>
              <ReserveButtonText>Reservar</ReserveButtonText>
            </ReserveButton>

            <AttentionText>
              Ao clicar em reservar você enviará dados de contato para que a
              empresa entre em contato com você, nós do app não nos
              responsabilizamos por reservas ou devidas frustrações causadas por
              ela, nós não garantimos reservas, apenas facilitamos o seu
              contato!
            </AttentionText>
          </ContentModal>
        </AboutLocalModal>
      </Modal>
    </Container>
  )
}
