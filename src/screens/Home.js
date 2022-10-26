import React, {useState, useEffect} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Btn from '../utils/Button';

const Home = ({navigation, route}) => {
  const [user, setuser] = useState({});
  useEffect(() => {
    AsyncStorage.getItem('User').then(data => {
      if (data) {
        setuser(JSON.parse(data));
      }
    });
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Home</Text>
      {/* <Btn handlePress={handlePress} title={'Show User'} color="red" /> */}
      {user?.name ? <Text>User : {user.name}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'FuzzyBubbles-Regular',
  },
});

export default Home;
