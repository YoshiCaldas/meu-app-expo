import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import Header from '../components/Header'

export default function SettingsScreen({
  navigation,
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
      }}
    >
      <Header title='Configurações' />

      <View
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
            }}
          >
            Tema Escuro
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
            }}
          >
            Notificações
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'Login',
                },
              ],
            })
          }
          style={{
            backgroundColor:
              '#DC2626',
            padding: 18,
            borderRadius: 14,
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            Sair da Conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}