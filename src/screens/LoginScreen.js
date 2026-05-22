import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
        justifyContent: 'center',
        padding: 25,
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 36,
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        Bem-vindo
      </Text>

      <TextInput
        placeholder='Email'
        placeholderTextColor='#94A3B8'
        style={{
          backgroundColor: '#1E293B',
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
        style={{
          backgroundColor: '#1E293B',
          padding: 18,
          borderRadius: 14,
          color: '#fff',
          marginBottom: 25,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#2563EB',
          padding: 18,
          borderRadius: 14,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}