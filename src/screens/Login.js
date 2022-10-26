import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {GlobalStyles} from '../utils/GlobalStyles';
import Btn from '../utils/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation, route}) => {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  console.log('A');
  const handlePress = async () => {
    if (name.length > 3 && password.length > 3) {
      try {
        await AsyncStorage.setItem('User', JSON.stringify({name, password}));
        setname('');
        setpassword('');
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Error', error?.message, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    } else {
      Alert.alert(
        'Incomplete input',
        'Name and Passwod should be greater than 3 character',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    }
  };
  return (
    <View style={styles.body}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Async Storage</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setname}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setpassword}
        />
        <Btn handlePress={handlePress} title={'Login'} color="red" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#536DFE',
  },
  form: {
    width: '100%',
    backgroundColor: '#536DFE',
    padding: 20,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  text: {
    fontFamily: 'FuzzyBubbles-Regular',
    fontSize: 30,
    color: 'white',
  },
  logo: {
    height: 100,
    width: 100,
    margin: 20,
  },
});

export default Login;
