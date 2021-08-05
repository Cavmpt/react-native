import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native'

interface Props {}

const Login = (props: Props) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState('')

  const onChangeText = (value: string) => {
    setUsername(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.xguard_title}>Xguard</Text>
      <Text style={styles.xguard_subtitle}>Robotic</Text>
      <TextInput
        style={styles.input_username}
        onChangeText={value => {
          onChangeText(value)
        }}
        value={username}
      />
      <TextInput
        style={styles.input_password}
        onChangeText={value => {
          onChangeText(value)
        }}
        value={username}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  xguard_title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  xguard_subtitle: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
  input_username: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input_password: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default Login
