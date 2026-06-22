import {
  View,
  Text,
  ScrollView,
} from 'react-native'

import {
  useContext,
} from 'react'

import Header from '../components/Header'

import {
  UserContext,
} from '../context/UserContext'

export default function ProfileScreen() {
  const {
    peso,
    altura,
    objetivo,
    dieta,
    cronograma,
    historicoPeso,
  } = useContext(UserContext)

  const pesoInicial =
    historicoPeso.length > 0
      ? historicoPeso[0].peso
      : peso

  const pesoAtual =
    historicoPeso.length > 0
      ? historicoPeso[
          historicoPeso.length - 1
        ].peso
      : peso

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          '#0F172A',
      }}
    >
      <Header title='Perfil' />

      <ScrollView
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            alignItems:
              'center',
            marginBottom: 25,
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor:
                '#2563EB',
              justifyContent:
                'center',
              alignItems:
                'center',
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                color:
                  '#fff',
                fontSize: 40,
                fontWeight:
                  'bold',
              }}
            >
              P
            </Text>
          </View>

          <Text
            style={{
              color: '#fff',
              fontSize: 28,
              fontWeight:
                'bold',
            }}
          >
            Pedro Caldas
          </Text>

          <Text
            style={{
              color:
                '#94A3B8',
              marginTop: 5,
            }}
          >
            FitLife User 💪
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight:
                'bold',
              marginBottom: 15,
            }}
          >
            Dados Atuais
          </Text>

          <Text
            style={{
              color:
                '#CBD5E1',
              fontSize: 18,
              lineHeight: 35,
            }}
          >
            ⚖️ Peso:
            {' '}
            {peso}

            {'\n'}

            📏 Altura:
            {' '}
            {altura}

            {'\n'}

            🎯 Objetivo:
            {' '}
            {objetivo}
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight:
                'bold',
              marginBottom: 15,
            }}
          >
            Evolução Física
          </Text>

          <Text
            style={{
              color:
                '#CBD5E1',
              fontSize: 18,
              lineHeight: 35,
            }}
          >
            Peso Inicial:
            {' '}
            {pesoInicial}

            {'\n'}

            Peso Atual:
            {' '}
            {pesoAtual}

            {'\n'}

            Histórico:
            {' '}
            {
              historicoPeso.length
            } registros
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight:
                'bold',
              marginBottom: 15,
            }}
          >
            Dieta Atual 🍽️
          </Text>

          <Text
            style={{
              color:
                '#CBD5E1',
              lineHeight: 28,
            }}
          >
            {dieta}
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight:
                'bold',
              marginBottom: 15,
            }}
          >
            Cronograma Semanal 📅
          </Text>

          <Text
            style={{
              color:
                '#CBD5E1',
              lineHeight: 30,
            }}
          >
            Segunda:
            {' '}
            {cronograma.segunda ||
              'Não definido'}

            {'\n\n'}

            Terça:
            {' '}
            {cronograma.terca ||
              'Não definido'}

            {'\n\n'}

            Quarta:
            {' '}
            {cronograma.quarta ||
              'Não definido'}

            {'\n\n'}

            Quinta:
            {' '}
            {cronograma.quinta ||
              'Não definido'}

            {'\n\n'}

            Sexta:
            {' '}
            {cronograma.sexta ||
              'Não definido'}

            {'\n\n'}

            Sábado:
            {' '}
            {cronograma.sabado ||
              'Não definido'}

            {'\n\n'}

            Domingo:
            {' '}
            {cronograma.domingo ||
              'Não definido'}
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight:
                'bold',
              marginBottom: 15,
            }}
          >
            Conquistas 🏆
          </Text>

          <Text
            style={{
              color:
                '#CBD5E1',
              lineHeight: 32,
            }}
          >
            🏅 Primeiro treino criado

            {'\n'}

            🏅 Dieta selecionada

            {'\n'}

            🏅 Primeiro registro de peso

            {'\n'}

            🏅 Projeto FitLife
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}