import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Linking, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [click, setclick] = useState(0);
  const [number, setNumber] = useState(0);
  const handleSet = () => {
    setName(text);
  };
  const handleAdd = () => {
    setclick(click + 1);
    setNumber(number + 5);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is {name}</Text>
      <TextInput value={text} onChangeText={setText} placeholder="Enter Name" />
      <Button title="set name" onPress={handleSet} />
      <Text style={styles.text}>Exercise</Text>
      <TextInput value={text} onChangeText={setText} placeholder="Enter Name" />
      <Text style={styles.text}>{number}</Text>
      <Button title="ADD" onPress={handleAdd} />
      <Text style={styles.text}>Number of click {click}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
