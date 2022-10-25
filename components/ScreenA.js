import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ScreenA = ({navigation}) => {
  console.log('A');
  const handlePress = () => {
    console.log('check');
    navigation.navigate('ScreenB', {id: 1});
  };
  return (
    <View style={styles.body}>
      <Text>Screen A</Text>
      <Pressable
        onPress={handlePress}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text>Go to B</Text>
      </Pressable>
      <TextInput placeholder="Type here to translate!" />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default ScreenA;
