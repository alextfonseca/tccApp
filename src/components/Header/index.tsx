import React from 'react'
import { TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <TouchableOpacity>
        <Icon name="align-justify" size={25} color="#2A6100" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="heart" size={25} color="#2A6100" />
      </TouchableOpacity>
    </Container>
  )
}
