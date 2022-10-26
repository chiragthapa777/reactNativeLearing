import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ScreenA = ({navigation, route}) => {
  console.log('A');
  const handlePress = () => {
    console.log('check');
    navigation.navigate('ScreenB', {id: 10, name: 'from A'});
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={handlePress}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text>Go to B</Text>
      </Pressable>
      <Text>{route.params?.name}</Text>
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
  text: {
    fontFamily: 'FuzzyBubbles-Regular',
  },
});

export default ScreenA;
