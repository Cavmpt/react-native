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

      <Text style={styles.username_text}>username</Text>
      <TextInput
        style={styles.input_username}
        onChangeText={value => {
          onChangeText(value)
        }}
        value={username}
      />

      <Text style={styles.password_text}>password</Text>
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
  username_text: {

  },
  password_text: {
    
  }

})

export default Login
