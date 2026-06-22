import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import {
  useState,
  useContext,
} from 'react'

import {
  UserContext,
} from '../context/UserContext'

export default function RegisterScreen({
  navigation,
}) {
  const {
    setUsuario,
    setEmail,
    setSenha,
  } = useContext(UserContext)

  const [nome, setNome] =
    useState('')

  const [emailNovo, setEmailNovo] =
    useState('')

  const [senhaNova, setSenhaNova] =
    useState('')

  function cadastrar() {
    if (
      !nome ||
      !emailNovo ||
      !senhaNova
    )
      return

    setUsuario(nome)
    setEmail(emailNovo)
    setSenha(senhaNova)

    navigation.navigate(
      'Login'
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          '#0F172A',
        justifyContent:
          'center',
        padding: 25,
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 36,
          fontWeight:
            'bold',
          marginBottom: 40,
        }}
      >
        Criar Conta
      </Text>

      <TextInput
        placeholder='Nome'
        placeholderTextColor='#94A3B8'
        value={nome}
        onChangeText={
          setNome
        }
        style={{
          backgroundColor:
            '#1E293B',
          padding: 18,
          borderRadius: 14,
          color: '#fff',
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder='Email'
        placeholderTextColor='#94A3B8'
        value={emailNovo}
        onChangeText={
          setEmailNovo
        }
        style={{
          backgroundColor:
            '#1E293B',
          padding: 18,
          borderRadius: 14,
          color: '#fff',
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder='Senha'
        placeholderTextColor='#94A3B8'
        secureTextEntry
        value={senhaNova}
        onChangeText={
          setSenhaNova
        }
        style={{
          backgroundColor:
            '#1E293B',
          padding: 18,
          borderRadius: 14,
          color: '#fff',
          marginBottom: 25,
        }}
      />

      <TouchableOpacity
        onPress={cadastrar}
        style={{
          backgroundColor:
            '#2563EB',
          padding: 18,
          borderRadius: 14,
          alignItems:
            'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight:
              'bold',
            fontSize: 16,
          }}
        >
          Criar Conta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            'Login'
          )
        }
      >
        <Text
          style={{
            color: '#fff',
            textAlign:
              'center',
            marginTop: 20,
            fontSize: 16,
          }}
        >
          Voltar para login
        </Text>
      </TouchableOpacity>
    </View>
  )
}