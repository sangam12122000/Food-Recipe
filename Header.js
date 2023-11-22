import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Header = ({ headerText, headericon }) => {
  let navigation = useNavigation()
  return (
    <View style={{ flexDirection: 'row' }} >
      <Pressable style={{flex:1}} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 18, color: 'red',fontWeight:'bold' }}>{headericon}</Text>
      </Pressable>
      <Text style={{fontSize: 22 }}>{headerText}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})