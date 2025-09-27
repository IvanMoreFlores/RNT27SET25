import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
  },
];

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log('count', count);
  }, [count]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view}>
            <Text style={styles.text3}>{count}</Text>
            <Text style={styles.text3}>{input}</Text>

            <TextInput
              value={input}
              onChangeText={setInput}
              style={styles.input}
            />

            <TouchableOpacity
              disabled={count >= 10}
              style={count >= 10 ? styles.buttonDisabled : styles.button}
              onPress={handleIncrement}
            >
              <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>

            <Button
              onPress={handleIncrement}
              title="Increment"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={handleDecrement}
              title="Decrement"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Text style={styles.text}>{item.title}</Text>
              )}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
            <Image
              // source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              src="https://reactnative.dev/img/tiny_logo.png"
              style={styles.image}
            />
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.text2}>Hello World</Text>
            <Text style={styles.text3}>Hello World</Text>
            <Text style={styles.text2}>Hello World</Text>
            <Text style={styles.text3}>Hello World</Text>
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.text2}>Hello World</Text>
            <Text style={styles.text3}>Hello World</Text>
            <Text style={styles.text2}>Hello World</Text>
            <Text style={styles.text3}>Hello World</Text>
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.text2}>Hello World</Text>
            <Text style={styles.text3}>Hello World</Text>
            <View
              accessible={true}
              accessibilityLabel="Box 1"
              accessibilityRole="button"
              style={styles.box}
            />
            <View
              accessible={true}
              accessibilityLabel="Box 2"
              accessibilityRole="button"
              style={styles.box2}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // flex: 1; css
    backgroundColor: 'white', // background-color: red; css
    // justifyContent: 'center', // justify-content: center; css
    // alignItems: 'center', // align-items: center; css
  },
  view: {
    flex: 1,
    padding: 24,
    gap: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: 'blue',
    flex: 0.5,
  },
  box2: {
    height: 100,
    backgroundColor: 'red',
    flex: 0.5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontStyle: 'normal',
    // textDecorationLine: 'line-through',
    // textDecorationStyle: 'solid',
  },
  text2: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontStyle: 'normal',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  text3: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontStyle: 'normal',
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'normal',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    fontSize: 18,
    padding: 20,
    borderRadius: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 18,
    fontSize: 24,
    height: 'auto',
    minHeight: 48,
    textAlignVertical: 'center',
  },
});
