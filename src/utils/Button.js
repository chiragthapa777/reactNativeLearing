import React, {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {GlobalStyles} from '../utils/GlobalStyles';

const baseColor = '#81C784';

const Btn = ({style, title, handlePress, color}) => {
  return (
    <Pressable
      onPress={handlePress}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : color || baseColor},
        styles.btn,
        {...style},
      ]}>
      <Text style={GlobalStyles.btnText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    paddingHorizontal: 50,
    backgroundColor: baseColor,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Btn;
