import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";

interface Props {

}

const Login = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (

    <SafeAreaView style={styles.container}>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

export default Login