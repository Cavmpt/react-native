import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";

interface Props {
  
}

const Signup = (props: Props) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  return (
    <SafeAreaView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Signup