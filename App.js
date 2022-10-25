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
  const [items, setItems] = useState([
    {id: '1', name: 'chirag'},
    {id: '2', name: 'ram'},
    {id: '3', name: 'meera'},
    {id: '4', name: 'purnima'},
    {id: '5', name: 'sita'},
    {id: '6', name: 'gita'},
  ]);
  const [laoding, setloading] = useState(false);
  const handleRefresh = () => {
    setloading(true);
    setTimeout(() => {
      setItems([
        ...items,
        {id: '7', name: 'hari'},
        {id: '8', name: 'shyam'},
        {id: '9', name: 'john'},
        {id: '10', name: 'michale'},
        {id: '11', name: 'richard'},
        {id: '12', name: 'joey'},
      ]);
      setloading(false);
    }, 3000);
  };
  return (
    <FlatList
      data={items}
      refreshControl={
        <RefreshControl
          refreshing={laoding}
          onRefresh={handleRefresh}
          colors={['blue']}
        />
      }
      style={styles.body}
      renderItem={({item}) => (
        <View style={styles.item} key={item.id}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
    // <ScrollView
    //   style={styles.body}
    // refreshControl={
    //   <RefreshControl
    //     refreshing={laoding}
    //     onRefresh={handleRefresh}
    //     colors={['blue']}
    //   />
    //   }>
    //   {items.length > 0 &&
    //     items.map(item => (
    // <View style={styles.item} key={item.id}>
    //   <Text style={styles.text}>{item.name}</Text>
    // </View>
    //     ))}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 35,
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
