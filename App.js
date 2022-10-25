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
  TouchableOpacity,
  Pressable,
  Alert,
  Image,
} from 'react-native';

import {Form} from './components/Form';

const App = () => {
  const [name, setname] = useState('');
  const [submit, setSubmit] = useState(false);
  const handlePress = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    } else {
      Alert.alert('Warning', 'Name should be bigger than 3', [{text: 'OK'}]);
    }
  };

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
      {/* <Button
        title="Submit"
        onPress={() => {
          setSubmit(!submit);
        }}
      /> */}
      {/* <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={() => {
          setSubmit(!submit);
        }}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity> */}
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? 'red' : 'pink'},
          styles.btn,
        ]}
        onPress={handlePress}>
        <Text style={styles.btnText}>Submit</Text>
      </Pressable>
      {submit ? <Text style={styles.text}> Name is : {name} </Text> : null}
      <Image
        source={require('./assets/pexels-andrea-piacquadio-874158.jpg')}
        style={styles.img}
        resizeMode="cover"
      />
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/1124960/pexels-photo-1124960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={styles.img}
        resizeMode="cover"
      />
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
  },
  btn: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0360ff',
    marginHorizontal: 'auto',
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
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
  img: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 10,
  },
});

export default App;
