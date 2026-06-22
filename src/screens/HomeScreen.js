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

export default function HomeScreen() {
  const {
    peso,
    altura,
    objetivo,
    dieta,
    imc,
    aguaConsumida,
    metaAgua,
  } = useContext(UserContext)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
      }}
    >
      <Header title='FitLife' />

      <ScrollView
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: '#2563EB',
            padding: 25,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            Objetivo Atual
          </Text>

          <Text
            style={{
              color: '#DBEAFE',
              fontSize: 18,
              marginTop: 10,
            }}
          >
            {objetivo}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent:
              'space-between',
            marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor:
                '#1E293B',
              width: '48%',
              padding: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: '#94A3B8',
              }}
            >
              Peso
            </Text>

            <Text
              style={{
                color: '#fff',
                fontSize: 28,
                fontWeight: 'bold',
                marginTop: 10,
              }}
            >
              {peso} kg
            </Text>
          </View>

          <View
            style={{
              backgroundColor:
                '#1E293B',
              width: '48%',
              padding: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: '#94A3B8',
              }}
            >
              Altura
            </Text>

            <Text
              style={{
                color: '#fff',
                fontSize: 28,
                fontWeight: 'bold',
                marginTop: 10,
              }}
            >
              {altura} m
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 25,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
            }}
          >
            IMC 📊
          </Text>

          <Text
            style={{
              color: '#22C55E',
              fontSize: 32,
              fontWeight: 'bold',
            }}
          >
            {imc}
          </Text>

          <Text
            style={{
              color: '#CBD5E1',
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Índice de Massa Corporal
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 25,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
            }}
          >
            Dieta Atual 🍽️
          </Text>

          <Text
            style={{
              color: '#CBD5E1',
              fontSize: 18,
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
            padding: 25,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
            }}
          >
            Água Consumida 💧
          </Text>

          <Text
            style={{
              color: '#CBD5E1',
              fontSize: 18,
            }}
          >
            {aguaConsumida} ml / {metaAgua} ml
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 25,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            Treino de Hoje 💪
          </Text>

          <Text
            style={{
              color: '#CBD5E1',
              fontSize: 18,
              lineHeight: 30,
            }}
          >
            Consulte seu cronograma
            semanal na aba Treino.
          </Text>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 25,
            borderRadius: 24,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            Dica Fitness 🚀
          </Text>

          <Text
            style={{
              color: '#94A3B8',
              fontSize: 18,
              lineHeight: 28,
            }}
          >
            Treine com consistência,
            mantenha uma boa alimentação
            e beba bastante água para
            maximizar seus resultados.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}