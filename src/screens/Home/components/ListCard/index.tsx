import React from 'react'
import { ImageCard } from '../../../../components/ImageCard'

import { Container, Title } from './styles'

interface ListCardProps {
  title: string
}

export function ListCard({ title }: ListCardProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <ImageCard />
    </Container>
  )
}
