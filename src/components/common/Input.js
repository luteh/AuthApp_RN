/**
 * Created by Luteh on 09/06/2017.
 */
import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({label, onChangeText, value, placeholder, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = styles
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20

  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    height: 40,
    flexDirection: 'row'
  }
}

export { Input }