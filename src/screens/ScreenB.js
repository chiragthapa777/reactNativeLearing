import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {GlobalStyles} from '../utils/GlobalStyles';

const ScreenB = ({navigation, route}) => {
  const {id, name} = route.params;
  console.log('B');
  const handlePress = () => {
    console.log('check');
    // navigation.goBack();
    navigation.navigate('ScreenA', {id: 69, name: 'from B'});
  };
  return (
    <View style={styles.body}>
      <Text>Screen B</Text>
      <Text style={[GlobalStyles.text, styles.text]}>
        id : {id} name : {name}
      </Text>
      <Pressable
        onPress={handlePress}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text>Back</Text>
      </Pressable>
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
    fontSize: 30,
  },
});

export default ScreenB;
