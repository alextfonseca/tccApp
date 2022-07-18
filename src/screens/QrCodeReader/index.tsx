import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { Modal } from 'react-native'
import { Header } from '../../components/Header'
import Scanner from './Component'
import {
  Button,
  ButtonText,
  CancelButton,
  Container,
  ModalQrCodeScanner,
  QrCodeScannerContainer,
  QrCodeScannerText
} from './styles'

export function QrCodeReader() {
  const [modalVisible, setModalVisible] = React.useState(false)

  // const [type, setType] = React.useState('')
  // const [data, setData] = React.useState('')

  const onCodeScanned = (type: any, data: any) => {
    // setType(type)
    // setData(data)
    console.log(type)
    console.log(data)
    setModalVisible(false)
  }

  return (
    <Container>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalQrCodeScanner>
          <Scanner onCodeScanned={onCodeScanned} />

          <CancelButton onPress={() => setModalVisible(false)}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
        </ModalQrCodeScanner>
      </Modal>

      <Header />

      <QrCodeScannerContainer>
        <AnimatedLottieView
          source={require('../../assets/qrReader.json')}
          autoPlay={true}
          style={{ width: 400, height: 400 }}
          resizeMode="cover"
        />

        <QrCodeScannerText>
          Aproxime seu celular do QR code e descubra mais sobre o local
        </QrCodeScannerText>
      </QrCodeScannerContainer>

      <Button onPress={() => setModalVisible(true)}>
        <ButtonText>Ler código QR</ButtonText>
      </Button>
    </Container>
  )
}
