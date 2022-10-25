import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Linking,
  TextInput,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [name, setname] = useState('');
  console.log(name);

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Enter Name : </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={val => {
          setname(val);
        }}
      />
      <Text style={styles.text}> Name is : {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  item: {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'pink',
    margin: 5,
    padding: 15,
    paddingVertical: 60,
  },
});

export default App;
