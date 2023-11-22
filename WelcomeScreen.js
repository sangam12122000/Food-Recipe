import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const WelcomeScreen = ({ navigation }) => {
    let [name,setName]=useState('')
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={require("../../assets/images/welcome1.png")} />
            <TextInput placeholder='Enter Your Name' 
            onChangeText={(text)=>setName(text)}
            value={name}
            style={{
                color: 'blacks',
                fontSize: 22,
                fontWeight: 'bold',
                
            }}/>
            <Text style={{
                fontSize: 42,
                fontWeight: 'bold',
                color: '#3c444c',
                marginTop: 44,
                marginBottom: 40
            }}>Cook Like a Chef</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('RecipeList',{ data: name })}
                style={{
                    backgroundColor: '#f54251',
                    borderRadius: 18,
                    paddingVertical: 18,
                    width: '80%',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 18,
                    color: '#fff',
                    fontWeight: 700
                }}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})