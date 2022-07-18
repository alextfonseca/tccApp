import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Scanner(props: any) {
  const [hasPermission, setHasPermission] = useState<any>(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true)
    props.onCodeScanned(type, data)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View
      style={{
        width: '100%',
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button
          title={'Repetir Escaneamento'}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  )
}
